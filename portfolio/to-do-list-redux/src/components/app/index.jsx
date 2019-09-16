import React from 'react';
import style from './index.module.css';
import Tasks from '../../containers/Tasks';
import Form from '../../containers/FormRedux';

const App = () => {
  return(
    <div className={style.appContainer}>
      <Form/>
      <Tasks/>
    </div>
  )
}

export default App;
