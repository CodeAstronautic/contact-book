import {
    CREATE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT
  } from "../constants/Types";
  
  const intialState = {
    contacts: [
      {
        id: 1,
        name: "Satvinder Singh",
        username: "Samar",
        email: "Singhsatvinder827@gmail.com"
      },
      {
        id: 10,
        name: "Samar Deep",
        username: "Samar",
        email: "Samar.biz"
      }
    ],
    contact: null
  };
  
  export const cantactReducer = (state = intialState, action) => {
    switch (action.type) {
      case CREATE_CONTACT:
        return {
          ...state,
          contacts: [action.payload, ...state.contacts]
        };
      case GET_CONTACT:
        let arr = state.contacts.filter(
          (contact) => contact.id == action.payload
        );
        arr = arr.values();
        for (let val of arr) {
          arr = val;
        }
        return {
          ...state,
          contact: arr
        };
      case UPDATE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.map((contact) =>
            contact.id == action.payload.id ? action.payload : contact
          )
        };
      case DELETE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.filter(
            (contact) => contact.id !== action.payload
          )
        };
      default:
        return state;
    }
  };
  