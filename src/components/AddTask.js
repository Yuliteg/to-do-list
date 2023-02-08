import styled from 'styled-components';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { WrapperAdd } from '../styles/WrapperList';

const AddTask = ({ setList, list }) => {
  const [formValue, setFormValue] = useState('')

  const addTask = () => {
    if(formValue) {
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

  const addTaskKey = (e) => {
    if (e.key == 'Enter' && formValue) {
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
    <WrapperAdd >
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
    </WrapperAdd>
  )
}


export default AddTask;