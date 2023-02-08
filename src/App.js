import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
	const [list, setList] = useState(() => {
		const savedItem = localStorage.getItem('my-to-do-list');
		const parsedItem = JSON.parse(savedItem);
		return parsedItem || [];
	});

	useEffect(() => {
		localStorage.setItem('my-to-do-list', JSON.stringify(list));
	}, [list]);


	return (
		<>
			<Header />
			<Container>
				<AddTask list={list} setList={setList} />
				{list.length ? <TaskList list={list} setList={setList} /> :
					<p className='first-task'>Please add you first <span>to-Do</span> task!</p>}
			</Container>
		</>
	);
}

const Container = styled.div`
  margin-right: 20%;
  margin-left: 20%;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

	 .first-task {
		margin-top: 2.5rem;
		color: #4C4E52;
		 font-size: 35px;
		 font-weight: 500;
		  span {
				color: #004100;
				font-size: 37px;
			}
	 }
`

export default App;
