export const todoReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "MODAL":
      return { ...state, showModal: true, editClicked: false };
    case "ADD_HANDLER":
      return {
        ...state,
        showModal: false,

        taskAdded: [
          ...state.taskAdded,
          {
            id: payload.id,
            title: payload.title,
            desc: payload.desc,
            timerLimit: payload.timerLimit,
            breakLimit: payload.breakLimit,
          },
        ],
      };
    case "DELETE_HANDLER":
      return {
        ...state,
        taskAdded: [...payload.filter((todo) => todo.id !== action.id)],
      };
    case "CANCEL_HANDLER":
      return {
        ...state,
        showModal: false,
      };
    case "UPDATE_HANDLER":
      return {
        ...state,
        taskAdded: [
          ...state.taskAdded.map((task) => {
            if (task.id === payload.id) {
              return {
                ...task,
                title: payload.title,
                desc: payload.desc,
                timerLimit: payload.timerLimit,
                breakLimit: payload.breakLimit,
              };
            }
            return task;
          }),
        ],
        showModal: false,
      };
    case "EDIT_HANDLER":
      return {
        ...state,
        showModal: true,
        editClicked: true,
        itemBeingEdited: payload,
      };

    case "UPDATE_STATE_OF_LOCALSTORAGE": {
      return payload;
    }
    default:
      return { ...state };
  }
};
