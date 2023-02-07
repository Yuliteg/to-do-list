import { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      title: 'first task',
      complited: false,
    },
    {
      id: 2,
      title: 'first task',
      complited: false,
    },
    {
      id: 3,
      title: 'first task',
      complited: false,
    }
  ])

  return (
    <>
      <Header />
      <Container>
        <AddTask />
        {list.map((el) => {
          return (
            <TaskList
              key={el.id}
              title={el.title}
              complited={el.complited} />
          )
        })}

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
`

export default App;
