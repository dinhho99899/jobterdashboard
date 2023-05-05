import React from 'react'
import main from '../assets/images/main.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job<span> Tracker</span> App
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis modi impedit reiciendis expedita quae sapiente ratione
            laudantium accusamus perspiciatis consequatur magni amet quam, dolor
            eveniet in nihil et ducimus sequi.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} className='img main-img' alt='main-img'></img>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
  }
  h1 {
    font-weight: 700;
  }
  .main-img {
    display: none;
  }
  @media screen and (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`
export default Landing
