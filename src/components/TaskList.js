import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa';
import { AiFillCheckCircle } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';


const TaskList = ({ list, setList }) => {
    const [editList, setEditList] = useState(false);
    const [editValue, setEditValue] = useState('');

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

    const editItem = (id, title) => {
        setEditList(id);
        setEditValue(title);
    }

    const saveList = (id) => {
        let newList = [...list].map(el => {
            if (el.id == id) {
                el.title = editValue;
            }
            return el;
        })
        setList(newList);
        setEditList(null);
    }

    return (
        <Container>
            {list.map(el => (
                <Wrapper key={el.id}>
                    {editList == el.id ?
                        <>
                            <div className='container'>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Edit your task"
                                        className='shadow-none'
                                        value={editValue}
                                        onChange={(e) => setEditValue(e.target.value)}
                                    />
                                </InputGroup>
                                <AiFillCheckCircle
                                    className='done-icon'
                                    onClick={() => saveList(el.id)}
                                />
                            </div>
                        </>
                        :
                        <>
                            <Form.Check
                                className={el.complited ? 'checkbox-complited shadow-none' : 'checkbox shadow-none'}
                                type="checkbox"
                                label={el.title}
                                checked={el.complited}
                                onChange={() => changeStatus(el.id)}
                            />
                            <div className="icon-container">
                                <MdDelete
                                    className='delete-icon'
                                    onClick={() => deleteItem(el.id)} />
                                <FaClipboardList
                                    className='edit-icon'
                                    onClick={() => editItem(el.id, el.title)}
                                />
                            </div>
                        </>
                    }
                </Wrapper>
            )
            )}
        </Container>
    )
}


const Container = styled.div`
    overflow-y: scroll;
    height: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ::-webkit-scrollbar {
    display: none;
    }
    `

const Wrapper = styled.div`
     width: 70%;
     margin-bottom: 0.7rem;
     padding-bottom: 1rem;
     padding: 0.5rem;
     display: flex;
     justify-content: space-between;
     border: 1px solid #ced4da;
     border-radius: 0.375rem;
  
   .checkbox {
    margin-top: 0.2rem;
    margin-left: 0.3rem;
    
    .form-check-label {
        font-size: 18px;
     }
     .form-check-input {
        font-size: 20px;
     }
     .form-check-input:focus {
         box-shadow: none;
     }
   }

    .checkbox-complited {
        margin-top: 0.2rem;
        margin-left: 0.3rem;
    .form-check-label {
        text-decoration: line-through;
        font-size: 18px;
     }
     .form-check-input {
        font-size: 20px;
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
   color: #FFBF00;
   font-size: 17px;
  }

  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .done-icon {
    cursor: pointer;
    font-size: 20px;
    fill: #306844;
     }
  }

  .input-group {
    width: 80%;
    margin-bottom: 0 !important;
    .form-control {
        border-top: transparent;
        border-left: transparent;
        border-right: transparent;
    }
  }
`

export default TaskList;