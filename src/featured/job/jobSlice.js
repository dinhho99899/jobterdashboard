import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch from '../../ultil/axios'
import { logoutUser } from '../user/userSlice'
const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  status: 'pending',
  statusOptions: ['pending', 'interview', 'declined'],
  isEditing: false,
  editJobId: '',
}
export const createJob = createAsyncThunk(
  'jobs/createJob',
  async (job, thunkAPI) => {
    try {
      const response = await customFetch.post('/jobs', job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      thunkAPI.dispatch(clearInput())
      return response.data
    } catch (error) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser())
        return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
      }
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
export const editJobs = createAsyncThunk(
  'jobs/editJob',
  async ({ jobId, job }, thunkAPI) => {
    try {
      const response = await customFetch.patch(`/jobs/${jobId}`, job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      thunkAPI.dispatch(clearInput())
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
    clearInput: () => {
      return { ...initialState }
    },
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false
        toast.success('Job Created')
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(editJobs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(editJobs.fulfilled, (state) => {
        state.isLoading = false
        toast.success('Job Modified...')
      })
      .addCase(editJobs.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
  },
})
export const { handleChange, clearInput, setEditJob } = jobSlice.actions
export default jobSlice.reducer
