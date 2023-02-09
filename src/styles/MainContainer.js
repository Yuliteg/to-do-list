import styled from 'styled-components';

export const MainContainer = styled.div`
  margin-right: 20%;
  margin-left: 20%;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

	.first-task {
		margin-top: 2.5rem;
    margin-left: 2.2%;
		color: #4C4E52;
		font-size: 35px;
		font-weight: 500;
	span {
		color: #004100;
		font-size: 37px;
			}
	 }
  @media (max-width: 400px) {
     margin-right: 0;
     margin-left: 0;
     margin-top: 10%;
      }
`