import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { AddTodo } from './components/AddTodo';
import { TodoLists } from './components/TodoLists';
import Header from "./components/Header"
import SideBar from "./components/Sidebar"


const App = () => {
  return (
    <div className="">
      {/* <SideBar/> */}
     <Header/>
      <h1 className="text-3xl font-bold text-yellow-500 underline">

      </h1>
      <AddTodo />
      <TodoLists />
    </div>
  );
}

export default App;