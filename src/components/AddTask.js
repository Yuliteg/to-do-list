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

  return (
    <Wrapper >
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Add your new task"
          className='shadow-none'
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <Button
          variant="success"
          id="button-addon2"
          onClick={addTask}
        >
          Add
        </Button>
      </InputGroup>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export default AddTask;