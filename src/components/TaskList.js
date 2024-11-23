import React from "react";

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      onDeleteTask(id);
    }
  };

  const handleStatusChange = (task, newStatus) => {
    onUpdateTask({ ...task, status: newStatus });
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available. Add some tasks!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.dueDate}</td>
                <td>
                  <select
                    value={task.status}
                    onChange={(e) => handleStatusChange(task, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;
