import styled from 'styled-components';

const Header = () => {
    return (
        <Wrapper >
        <p>To-Do List</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #50c878;
  
   p {
    font-size: 25px;
    color: white;
    font-weight: 500;
   }
`

export default Header;