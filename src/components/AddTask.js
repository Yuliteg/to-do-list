import styled from 'styled-components';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddTask = () => {
  return (
    <Wrapper >
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Add your new task"
          className='shadow-none'
        />
        <Button variant="success" id="button-addon2">
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