import { useContext, createContext, useState } from "react";
import { useTodo } from "./todo-context";

const ModalContext = createContext();

const useModal = () => useContext(ModalContext);

const ModalProvider = ({ children }) => {
  const { editClicked, itemBeingEdited } = useTodo();

  const [pomodoroDesc, setPomodoroDesc] = useState([]);
  const [breakLimit, setBreakLimit] = useState(
    editClicked ? itemBeingEdited.breakLimit : 20
  );
  const [timerLimit, setTimerLimit] = useState(
    editClicked ? itemBeingEdited.timerLimit : 60
  );
  return (
    <ModalContext.Provider
      value={{
        timerLimit,
        setTimerLimit,
        pomodoroDesc,
        setPomodoroDesc,
        breakLimit,
        setBreakLimit,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { useModal, ModalProvider };
