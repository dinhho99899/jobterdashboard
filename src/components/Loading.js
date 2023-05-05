import React from 'react'
import styled from 'styled-components'
const Loading = () => {
  return (
    <Wrapper>
      <div className='loading'></div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .loading {
    margin: 0 auto;
  }
`
export default Loading
