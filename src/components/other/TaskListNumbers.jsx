import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5 ">
      <div className="rounded-xl py-6 px-6 w-[300px] bg-red-400 shadow-lg text-center ">
        <h2 className="text-3xl font-bold">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl font-medium mt-2">New Task</h3>
      </div>
      <div className="rounded-xl py-6 px-6 w-[300px] bg-blue-400 shadow-lg text-center">
        <h2 className="text-3xl font-bold">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl font-medium mt-2">Completed Task</h3>
      </div>
      <div className="rounded-xl py-6 px-6 w-[300px] bg-green-400 shadow-lg text-center">
        <h2 className="text-3xl font-bold">{data.taskNumbers.active}</h2>
        <h3 className="text-xl font-medium mt-2">Accepted Task</h3>
      </div>
      <div className="rounded-xl py-6 px-6 w-[300px] bg-yellow-400 shadow-lg text-center">
        <h2 className="text-3xl font-bold">{data.taskNumbers.fail}</h2>
        <h3 className="text-xl font-medium mt-2">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
