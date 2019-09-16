import React, {useState} from 'react';
import {reduxForm,reset} from 'redux-form';
import Form from '../components/form';
import {connect} from 'react-redux';
import {addTask} from '../actions/task';

const FormRedux = reduxForm({form: 'addTask'})(Form);

const FormContainer = (props) => {
  const [id, setId] = useState(1);
  const onSubmit = ({title,description}) => {
    props.addTask({
      title,
      description,
      id
     })
    setId(id + 1);
  return props.reset('addTask');
}
  return(
    <div>
      <FormRedux onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = () => ({

})
const mapDispatchToProps = (dispatch) => {
  return{
    addTask: (task) => {
      dispatch(addTask(task));
    },
    reset: (name) => {
        dispatch(reset(name));
      }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
