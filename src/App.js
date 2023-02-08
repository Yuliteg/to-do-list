import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { MainContainer } from './styles/MainContainer';

function App() {

	const [list, setList] = useState(() => {
		const storageItem = localStorage.getItem('my-to-do-list');
		const parsedItem = JSON.parse(storageItem);
		return parsedItem || [];
	});

	useEffect(() => {
		localStorage.setItem('my-to-do-list', JSON.stringify(list));
	}, [list]);


	return (
		<>
			<Header />
			<MainContainer>
				<AddTask list={list} setList={setList} />
				{list.length ? <TaskList list={list} setList={setList} /> :
					<p className='first-task'>Please add you first <span>to-Do</span> task!</p>}
			</MainContainer>
		</>
	);
}


export default App;
