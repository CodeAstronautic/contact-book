import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, updateTodo } from "../redux/action";
import Button from "./Button"

export const AddTodo = () => {
  const [value, setValue] = useState({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const isEdit = useSelector((state) => state.todoReducer.isEdit);
  const editTodo = useSelector((state) => state.todoReducer.editTodo);

  useEffect(() => {
    editTodo && setValue(() => editTodo);
  }, [editTodo]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!value?.title) {
      setError((error) => ({
        ...error,
        title: 'Please enter todo title',
      }));
      return;
    }
    if (!value?.description) {
      setError((error) => ({
        ...error,
        description: 'Please enter todo description'
      }));
      return;
    }

    if (isEdit) {
      dispatch(updateTodo(editTodo.id, value));
    }
    else {
      dispatch(addNewTodo(value));
    }
    setValue({ title: '', description: '' });
    document.getElementById("todoForm").reset();
  };

  const changeEvent = (e) => {
    setValue(
      {
        ...value,
        [e.target.name]: e.target.value,
      },
    );
    if (e?.target?.name === "title") {
      setError({
        title: "",
      });
    }
    if (e?.target?.name === "description") {
      setError({
        description: ""
      });
    }
  };

  return (



    <div className="container my-4 h-96 m-auto py-1 w-96 border text-center bg-white shadow-md border border-gray-200 rounded-lg  p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">


      <form className="mt-3 mb-2" id="todoForm" onSubmit={onSubmit}>
        <div className="row">
          <div className="">
            <div class="text-lg ml-3 mb-5">
              <label for="remember" className="font-medium text-gray-900 dark:text-gray-300">Name</label>
            </div>
            <input
              type="text"
              name="title"
              className="   w-[21rem] mb-5  shadow appearance-none border rounded-xl  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username
              "
              placeholder="Name"
              defaultValue={value?.title}
              onChange={(e) => changeEvent(e)}
            />
            <span className="text-danger">{error?.title}</span>
          </div>

          <div className="col-xl-3">
            <div class="text-lg ml-3 mb-5">
              <label for="remember" className="font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
            </div>

            <input
              type="text"
              name="description"
              className="     w-[21rem]  rounded-xl mb-5     shadow appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username
              "
              placeholder="Contact"
              defaultValue={value?.description}
              onChange={(e) => changeEvent(e)}
            />
            <span className="text-danger">{error?.description}</span>
          </div>

          <div className="col-xl-2">
            <Button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit"> {isEdit ? 'Update Todo' : 'Create Todo'} </Button>
          </div>
        </div>
      </form>
    </div>
  );
};