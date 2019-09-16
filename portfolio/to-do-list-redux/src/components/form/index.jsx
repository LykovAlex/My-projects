import React from 'react';
import {Field} from 'redux-form';
import {Textarea, Input} from '../common/FormsControls';
import {required, minMaxLength} from '../../utils/validators/validators';

const inputLength = minMaxLength(2)(20);
const textareaLength = minMaxLength(2)(200);



const Form = (props) => {
  console.log(props);
  const { handleSubmit} = props;
  return(
    <form onSubmit={handleSubmit} >
      <div >
        <p><label htmlFor="toDoTitle">Title</label></p>
        <Field component={Input} validate={[required, inputLength]} type="text" name="title" id="toDoTitle" />
      </div>
      <div >
        <p><label htmlFor="toDoDescription">Description</label></p>
        <Field component={Textarea} validate={[required, textareaLength]}  name="description" id="toDoDescription" cols="30" rows="10"/>
      </div>
      <div >
        <button type="submit">Add Task</button>
      </div>
    </form>
  )
}
export default Form
