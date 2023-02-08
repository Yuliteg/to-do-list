import Header from './components/Header';
import AddTask from './components/TaskInput';
import TaskList from './components/TaskList';
import { MainContainer } from './styles/MainContainer';
import { useGlobalContext } from './context/toDoContext';

function App() {
	const { list,
		addTask,
		addTaskKey,
		formValue,
		setFormValue,
		editList,
		editValue,
		setEditValue,
		changeStatus,
		deleteItem,
		editItem,
		saveList,
    } = useGlobalContext();

	return (
		<>
			<Header />
			<MainContainer>
				<AddTask
					addTask={addTask}
					addTaskKey={addTaskKey}
					formValue={formValue}
					setFormValue={setFormValue}
				/>
				{list.length ? <TaskList 
				 list={list}
				 editList={editList}
				 editValue={editValue}
				 setEditValue={setEditValue}
				 changeStatus={changeStatus}
				 deleteItem={deleteItem}
				 editItem={editItem}
				 saveList={saveList}
				 /> :
					<p className='first-task'>Please add you first <span>to-Do</span> task!</p>}
			</MainContainer>
		</>
	);
}


export default App;
