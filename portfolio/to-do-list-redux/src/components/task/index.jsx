import React from 'react';
import style from './index.module.css';

const Task = ({title, description, id, deleteTask, complete, changeComplete}) => {
  console.log(complete);
  return(
    <div className={style.task + ' ' + (complete ? style.complete : '')}>
      <p>{title}</p>
      <p>{description}</p>
      <p>{id}</p>
      <button onClick={changeComplete}>Complete</button>
      <button onClick={deleteTask.bind(null,id)}>Delete</button>
    </div>
  )
}
export default Task
