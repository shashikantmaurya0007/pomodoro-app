export const pomodoroReducer = (state, action) => {
    
    switch (action.type) {
      case "FOCUS_HANDLER":
        return { ...state, focusTimer: false, breakTimer: true };
      case "BREAK_HANDLER":
        return { ...state, focusTimer: true, breakTimer: false };
      case "START_HANDLER":
        return { ...state, play: true };
      case "STOP_HANDLER":
        return { ...state, play: false };
      case "RESTART_HANDLER":
        return { ...state, play: true, key: state.key + 1 };

      default:
        return { ...state };
    }
  };