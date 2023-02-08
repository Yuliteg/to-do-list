import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [formValue, setFormValue] = useState('');
  const [editList, setEditList] = useState(false);
  const [editValue, setEditValue] = useState('');

  const [list, setList] = useState(() => {
    const storageItem = localStorage.getItem('my-to-do-list');
    const parsedItem = JSON.parse(storageItem);
    return parsedItem || [];
  });

  useEffect(() => {
    localStorage.setItem('my-to-do-list', JSON.stringify(list));
  }, [list]);

  const addTask = () => {
    if (formValue) {
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
    if (e.key === 'Enter' && formValue) {
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

  const deleteItem = (id) => {
    const newList = [...list].filter(el => el.id !== id);
    setList(newList);
}

const changeStatus = (id) => {
    const newList = [...list].filter(el => {
        if (el.id === id) {
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
      if (el.id === id) {
          el.title = editValue;
      }
      return el;
  })
  setList(newList);
  setEditList(null);
}

  return (
    <GlobalContext.Provider value={{
      list,
      setList,
      formValue,
      setFormValue, addTask,
      addTaskKey,
      editList,
      setEditList,
      editValue,
      setEditValue,
      deleteItem,
      changeStatus,
      editItem,
      saveList,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default AppContext;