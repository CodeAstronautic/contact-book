const initialstate = {
    users: []
  };
  
  const AddReducer = (state = initialstate, action) => {
    switch (action.type) {
      case "ADD_USER":
        return {
          users: [action.payload, ...state.users]
        };
      case "EDIT_USER":
        const updatedUserDetail = action.payload;
        const updatedUser = state.users.map((user) => {
          if (user.id === updatedUserDetail.id) {
            return updatedUserDetail;
          } else {
            return user;
          }
        });
        return { users: updatedUser };
  
      case "REMOVE_USER":
        return {
          users: state.users.filter((user) => {
            return user.id !== action.payload;
          })
        };
      default:
        return state;
    }
  };
  
  export default AddReducer;
  