import React from 'react'
import AcceptTack from './AcceptTack';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10 min-h-[300px]'>
    {data.tasks.map((el,id)=>{
      console.log(el);
      if(el.active){
            return <AcceptTack key={id} data={el}/>
      }
      if(el.newTask){
            return <NewTask key={id} data={el}/>
      }
      if(el.completed){
            return <CompleteTask key={id} data={el}/>
      }
      if(el.failed){
            return <FailedTask key={id} data={el}/>
      }
    })}
    </div>
  )
}

export default TaskList;
