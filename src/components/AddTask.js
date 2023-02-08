import styled from 'styled-components';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const AddTask = ({ setList, list }) => {
  const [formValue, setFormValue] = useState('')

  const addTask = () => {
    setList([
      ...list, {
        id: Date.now(),
        title: formValue,
        complited: false,
      }
    ])
    setFormValue('')
  }

  const addTaskKey = (e) => {
    if (e.key == 'Enter') {
      setList([
        ...list, {
          id: Date.now(),
          title: formValue,
          complited: false,
        }
      ])
      setFormValue('')
    }
  }

  return (
    <Wrapper >
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Add your new task"
          className='shadow-none'
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          onKeyUp={addTaskKey}
        />
        <Button
          variant="success"
          id="button-addon2"
          onClick={addTask}
        >
          Add
        </Button>
      </InputGroup>
      {/* {list.length ? <div className="button-container">
        <Button variant='dark'>All</Button>
        <Button variant='success'>Open</Button>
        <Button variant='warning'>Complited</Button>
      </div> : <></>
      } */}

    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 1rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .button-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 3.2px;
    .btn-warning {
      color: white;
    }
  }
`

export default AddTask;