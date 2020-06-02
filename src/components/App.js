import "../App.css";
import React, { Component } from "react";
import TaskList from "./TaskList";
import TaskListContextProvider from "../context/TaskListContext";
import TaskForm from "./TaskForm";
import Header from "./Header";

export default class App extends Component {
  render() {
    return (
      <TaskListContextProvider>
        <div className="container">
          <div className="app-wrapper">
            <Header />
            <div className="main">
              <TaskForm />
              <TaskList />
            </div>
          </div>
        </div>
      </TaskListContextProvider>
    );
  }
}
