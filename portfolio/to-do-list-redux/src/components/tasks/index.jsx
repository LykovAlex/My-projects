import React from 'react';
import style from './index.module.css';
import Task from '../../containers/Task';

const Tasks = ({tasks, deleteTask}) => {
  let allTasks = tasks.map( task =>
    <Task
      title={task.title}
      description={task.description}
      id={task.id}
      key={task.id}
      deleteTask={deleteTask}
    />
   )
  return(
    <div className={style.tasks}>
      {allTasks}
    </div>
  )
}

export default Tasks
