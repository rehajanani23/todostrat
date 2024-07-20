import React, { useState } from 'react';
class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: 'Watch Series', completed: false, category: 'watch-series' },
        { id: 2, text: 'Complete HW', completed: false, category: 'complete-hw' },
        { id: 3, text: 'Good Sleep', completed: false, category: 'good-sleep' },
        { id: 4, text: 'Selfcare', completed: false, category: 'elfcare' },
      ],
      newTaskText: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTaskText: event.target.value });
  }

  handleAddTask = () => {
    const newTask = {
      id: this.state.tasks.length + 1,
      text: this.state.newTaskText,
      completed: false,
      category: '',
    };
    this.setState({ tasks: [...this.state.tasks, newTask], newTaskText: '' });
  }

  handleToggleCompleted = (taskId) => {
    const tasks = this.state.tasks.map((task) => {
      if (task.id === taskId) {
        task.completed =!task.completed;
      }
      return task;
    });
    this.setState({ tasks });
  }

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <input
          type="text"
          id="task-input"
          placeholder="Enter task"
          value={this.state.newTaskText}
          onChange={this.handleInputChange}
        />
        <button id="add-task-btn" onClick={this.handleAddTask}>
          Add Task
        </button>
        <ul id="task-list">
          {this.state.tasks.map((task) => (
            <li key={task.id} className={task.category}>
              <input
                type="checkbox"
                id={task.id}
                checked={task.completed}
                onChange={() => this.handleToggleCompleted(task.id)}
              />
              <label for={task.id}>{task.text}</label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;