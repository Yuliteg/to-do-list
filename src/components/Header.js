import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper >
      <p>To-Do List</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #009000;
  
   p {
    font-size: 30px;
    color: white;
    font-weight: 600;
   }
`

export default Header;