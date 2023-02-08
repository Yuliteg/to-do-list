import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { WrapperAdd } from '../styles/WrapperList';

const AddTask = ({  addTask, addTaskKey, formValue, setFormValue }) => {

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