import React from 'react'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <Wrapper className='ful-page'>
      <div>
        <img src={img} alt='error' />
        <h3>Not found</h3>
        <Link to='/'>Back Home</Link>
      </div>
    </Wrapper>
  )
}

export default Error
