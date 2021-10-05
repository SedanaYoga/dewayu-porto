import styled from 'styled-components'

function MyWorks() {
  return (
    <MyWorksStyled>
      <h1 className='title'>MY WORKS</h1>
    </MyWorksStyled>
  )
}

export default MyWorks

export const MyWorksStyled = styled.div`
  position: relative;
  margin-top: 120px;
  h1.title {
    font-size: 180px;
    color: rgba(255, 255, 255, 0.53);
  }
`
