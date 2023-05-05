import { configureStore } from '@reduxjs/toolkit'
import userSlice from './featured/user/userSlice'
import jobSlice from './featured/job/jobSlice'
import allJobsSlice from './featured/job/allJobsSlice'
export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
  },
})
