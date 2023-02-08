import { MdDelete } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa';
import { AiFillCheckCircle } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { WrapperList, Container, ButtonContainer } from '../styles/WrapperList';


const TaskList = ({ list,
    editValue,
    setEditValue,
    editList,
    changeStatus,
    deleteItem,
    editItem,
    saveList }) => {
    const [newFilteredList, setNewFilteredList] = useState(list);

    const filterList = (value) => {
        if (value === 'all') {
            setNewFilteredList(list);
        } else {
            let newList = [...list].filter(el => el.complited === value);
            setNewFilteredList(newList);
        }
    }

    useEffect(() => {
        setNewFilteredList(list)
    }, [list])

    return (
        <>
            <ButtonContainer>
                {list.length ? <div className="button-container">
                    <Button
                        variant='dark'
                        onClick={() => filterList("all")}
                    >All</Button>
                    <Button
                        variant='warning'
                        onClick={() => filterList(false)}
                    >Open</Button>
                    <Button
                        variant='success'
                        onClick={() => filterList(true)}
                    >Complited</Button>
                </div> : <></>
                }
            </ButtonContainer>
            <Container>
                {newFilteredList.map(el => (
                    <WrapperList key={el.id}>
                        {editList === el.id ?
                            <>
                                <div className='container'>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Edit your task"
                                            className='shadow-none'
                                            value={editValue}
                                            as="textarea"
                                            rows={1}
                                            onChange={(e) => setEditValue(e.target.value)}
                                        />
                                    </InputGroup>
                                    <AiFillCheckCircle
                                        className='done-icon'
                                        onClick={() => saveList(el.id)}
                                    />
                                </div>
                            </> : <>
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
                    </WrapperList>
                )
                )}
            </Container>
        </>
    )
}


export default TaskList;