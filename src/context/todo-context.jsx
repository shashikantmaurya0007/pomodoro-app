import { useContext, createContext, useReducer, useEffect } from "react";

import { todoReducer } from "../reducer/todo-reducer";

const TodoContext = createContext();

const useTodo = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const initialState = {
    showModal: false,
    taskAdded: [],
    editClicked: false,
    itemBeingEdited: null,
  };

  const [{ showModal, taskAdded, editClicked, itemBeingEdited }, dispatch] =
    useReducer(todoReducer, initialState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_STATE_OF_LOCALSTORAGE",
      payload: {
        ...initialState,
        taskAdded: JSON.parse(localStorage.getItem("todo_")) || [],
      },
    });
  }, []);

  return (
    <TodoContext.Provider
      value={{
        showModal,
        taskAdded,
        dispatch,
        editClicked,
        itemBeingEdited,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { useTodo, TodoProvider };
