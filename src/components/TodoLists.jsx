import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, editTodo, markTodoCompleted, clearAlltodo } from "../redux/action";

export const TodoLists = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const [selectedTodo, setSelectedTodo] = useState([]);

  const actionClick = (data) => {
    if (data && data?.type === "edit") {
      dispatch(editTodo(data?.todo?.id));
    } else if (data && data?.type === "delete") {
      dispatch(deleteTodo(data?.todo?.id));
    }
  };

  const changeEvent = (e, todoId) => {
    if (e?.target?.name !== "select_all_todo" && e?.target?.checked === true) {
      if (selectedTodo.indexOf(todoId) === -1) {
        setSelectedTodo((todo) => [...todo, todoId]);
      }
    } else if (e?.target?.name !== "select_all_todo" && e?.target?.checked === false) {
      const todos = selectedTodo.filter((todo) => todo !== todoId);
      setSelectedTodo(todos);
    }

    if (e?.target?.name === "select_all_todo" && e?.target?.checked === true) {
      todos && todos.forEach((todo, index) => {
        const allChkbox = document.getElementsByName(`todo_${index}`);

        for (let chk of allChkbox) {
          chk.checked = true;
          let todoId = todo?.id;

          setSelectedTodo((todo) => [
            ...todo,
            todoId
          ]);
        }
      });
    }

    else if (e?.target?.name === "select_all_todo" && e?.target?.checked === false) {
      todos && todos.forEach((todo, index) => {
        const allChkbox = document.getElementsByName(`todo_${index}`);
        for (let chk of allChkbox) {
          chk.checked = false;
          setSelectedTodo([]);
        }
      });
    }
  };

  const markCompleted = () => {
    dispatch(markTodoCompleted(selectedTodo));
  };

  return (
    <div className="container my-2">
      <div className="row pb-4" style={{height: "60px"}}>
        <div className="col-xl-12 text-right">
          {selectedTodo.length > 0 && (
            <>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(clearAlltodo())}
              >
                Clear Todos
              </button>
              <button
                className="btn btn-success ml-2"
                onClick={markCompleted}
              >
                Mark As Completed
              </button>
            </>
          )}
        </div>
      </div>

      <div className="relative overflow-x-auto">
     
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center">
      
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                   Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                   Status
                </th>
                {/* <th scope="col" className="px-6 py-3">
                    Price
                </th> */}
            </tr>
        </thead>
        {todos && todos.map((todo, index) => (
        <tbody>
           {/* <td className="px-6 py-4">
                <input
                  type={"checkbox"}
                  value={todo?.id}
                  onChange={(e) => changeEvent(e, todo?.id)}
                  name={`todo_${index}`}
                />
              </td> */}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {todo?.title}
                </th>
                <td className="px-6 py-4">
                {todo?.description}
                </td>
                <td className="px-6 py-4">
                {todo?.isCompleted ? (
                  <span className="badge badge-success p-2">Completed</span>
                ) : todo?.isPending ? (
                  <span className="badge badge-danger p-2">Pending</span>
                ) : (
                  ""
                )}
              </td>
                <td className="px-6 py-4">
                <button
                  className="bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => actionClick({ todo: todo, type: "edit" })}
                >
                  Edit
                </button>
                </td>
                <td className="px-6 py-4">
                <button
                  className="bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => actionClick({ todo: todo, type: "delete" })}
                >
                  Delete
                </button>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {todo?.description}
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td> */}
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td> */}
            </tr>
            
        </tbody>
          ))} 
    </table>
    
</div>

      {/* <table className="table table-bordered">
        <thead>
          <tr>
            <th width="3%">
              <input
                type={"checkbox"}
                onChange={(e) => changeEvent(e)}
                name={"select_all_todo"}
              />
            </th>
            <th width="30%">Name</th>
            <th width="42%">Contact</th>
            <th width="8%">Status</th>
            <th width="20%">Action</th>
          </tr>
        </thead>

        <tbody>
          {todos && todos.map((todo, index) => (
            <tr key={index}>
              <td>
                <input
                  type={"checkbox"}
                  value={todo?.id}
                  onChange={(e) => changeEvent(e, todo?.id)}
                  name={`todo_${index}`}
                />
              </td>
              <td>{todo?.title}</td>
              <td>{todo?.description}</td>
              <td>
                {todo?.isCompleted ? (
                  <span className="badge badge-success p-2">Completed</span>
                ) : todo?.isPending ? (
                  <span className="badge badge-danger p-2">Pending</span>
                ) : (
                  ""
                )}
              </td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => actionClick({ todo: todo, type: "edit" })}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm ml-1"
                  onClick={() => actionClick({ todo: todo, type: "delete" })}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};