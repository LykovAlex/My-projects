import React,{useState} from 'react';
import Task from '../components/task';

const TaskContainer = React.memo((props) => {
  const[complete, setComplete] = useState(false);
  const changeComplete = () => {
    setComplete(!complete);
  }
  return(
    <Task complete={complete} changeComplete={changeComplete} {...props}/>
  )
})

export default TaskContainer
