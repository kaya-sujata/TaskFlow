import React, { useState } from "react";

const CreateTask = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignedEmployee, setAssignedEmployee] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      firstName: "Aarav",
      email: "employee1@example.com",
      password: "123",
      taskNumbers: { active: 2, newTask: 1, completed: 1, fail: 0 },
      tasks: []
    },
    {
      id: 2,
      firstName: "Ishaan",
      email: "employee2@example.com",
      password: "123",
      taskNumbers: { active: 1, newTask: 1, completed: 1, fail: 0 },
      tasks: []
    },
    {
      id: 3,
      firstName: "Vihaan",
      email: "employee3@example.com",
      password: "123",
      taskNumbers: { active: 1, newTask: 1, completed: 1, fail: 0 },
      tasks: []
    },
    {
      id: 4,
      firstName: "Aditya",
      email: "employee4@example.com",
      password: "123",
      taskNumbers: { active: 1, newTask: 1, completed: 1, fail: 0 },
      tasks: []
    },
    {
      id: 5,
      firstName: "Kabir",
      email: "employee5@example.com",
      password: "123",
      taskNumbers: { active: 2, newTask: 1, completed: 1, fail: 0 },
      tasks: []
    }
  ]);

  const handleTaskCreation = () => {
    if (!taskName || !taskDescription || !taskDate || !assignedEmployee || !taskCategory) {
      return;
    }

    const selectedEmployeeIndex = employees.findIndex(emp => emp.firstName === assignedEmployee);
    if (selectedEmployeeIndex !== -1) {
      const newTask = {
        title: taskName,
        description: taskDescription,
        date: taskDate,
        category: taskCategory,
        active: false,
        completed: false,
        fail: false,
        newTask: true
      };

      const updatedEmployees = [...employees];
      updatedEmployees[selectedEmployeeIndex].tasks.push(newTask);
      setEmployees(updatedEmployees);

      console.log("Updated Employee Details:", updatedEmployees[selectedEmployeeIndex]);
    }

    setTaskName("");
    setTaskDescription("");
    setTaskDate("");
    setTaskCategory("");
    setAssignedEmployee("");
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "black", borderRadius: "10px" }}>
      <h2 style={{ color: "white" }}>Create Task</h2>
      <input type="text" placeholder="Task Name" value={taskName} onChange={(e) => setTaskName(e.target.value)} style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%" }} />
      <input type="text" placeholder="Task Description" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%" }} />
      <input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%", color: "white", backgroundColor: "black", border: "1px solid white" }} />
      <input type="text" placeholder="Task Category" value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)} style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%" }} />
      <select value={assignedEmployee} onChange={(e) => setAssignedEmployee(e.target.value)} style={{ backgroundColor: "black", color: "white", padding: "8px", borderRadius: "5px", width: "100%" }}>
        <option value="">Select Employee</option>
        {employees.map((emp) => (
          <option key={emp.id} value={emp.firstName}>{emp.firstName}</option>
        ))}
      </select>
      <button onClick={handleTaskCreation} style={{ display: "block", marginTop: "10px", padding: "10px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Create Task</button>
    </div>
  );
};

export default CreateTask;
