import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';


const TaskList = ({ list, setList }) => {

    const deleteItem = (id) => {
        const newList = [...list].filter(el => el.id != id);
        setList(newList);
    }
    const changeStatus = (id) => {
        const newList = [...list].filter(el => {
            if (el.id == id) {
                el.complited = !el.complited;
            }
            return el;
        })
        setList(newList);
    }
    return (
        <Container>
            {list.map(el => (
                <Wrapper key={el.id}>
                    <Form.Check
                        className={el.complited ? 'checkbox-complited shadow-none' : 'checkbox shadow-none'}
                        type="checkbox"
                        label={el.title}
                        onChange={() => changeStatus(el.id)}
                    />
                    <div className="icon-container">
                        <MdDelete
                            className='delete-icon'
                            onClick={() => deleteItem(el.id)} />
                        <FaClipboardList
                            className='edit-icon'
                            
                        />
                    </div>
                </Wrapper>
            )
            )}
        </Container>
    )
}
const Container = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`

const Wrapper = styled.div`
  width: 70%;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;

  .checkbox {
    margin-top: 1rem;
    padding-bottom: 0.5rem;
    .form-check-input:focus {
        box-shadow: none;
     }
  }

  .checkbox-complited {
    margin-top: 1rem;
    padding-bottom: 0.5rem;
     .form-check-label {
        text-decoration: line-through;
     }
     .form-check-input:focus {
        box-shadow: none;
     }
     .form-check-input:checked  {
        background-color: #009000;
     }
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