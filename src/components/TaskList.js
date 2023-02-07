import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';


const TaskList = ({ title, complited }) => {
    const deleteItem = () => {
        console.log('delete')
    }
    return (
        <Wrapper >
            <Form.Check
                className='checkbox'
                type="checkbox"
                label={title}
            />
            <div className="icon-container">
                <MdDelete 
                className='delete-icon'
                onClick={() => deleteItem()}/>
                <FaClipboardList 
                className='edit-icon'
                />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 70%;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;

  .checkbox {
    margin-top: 1rem;
    padding-bottom: 0.5rem;
  }
  .icon-container {
    padding-right: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .delete-icon {
    cursor: pointer;
    color: #C70000;
    font-size: 20px;
  }
  .edit-icon {
    cursor: pointer;
    color: #009000;
    font-size: 17px;
  }

`

export default TaskList;