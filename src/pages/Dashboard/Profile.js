import { useSelector, useDispatch } from 'react-redux'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { FormRow } from '../../components'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { updateUser } from '../../featured/user/userSlice'
import Loading from '../../components/Loading'
const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    location: user?.location || '',
    lastName: user?.lastName || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, location, lastName } = userData
    if (!name || !email || !lastName || !location) {
      toast.error('Please Fill out all fields')
    }
    dispatch(updateUser(userData))
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserData({ ...userData, [name]: value })
  }
  if (isLoading)
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    )
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            labelText='last name'
            name='lastName'
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type='email'
            name='email'
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='location'
            value={userData.location}
            handleChange={handleChange}
          />
          <button className='btn' type='submit' onSubmit={handleSubmit}>
            Save changes
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile
