import React from 'react';
import style from './FormsControls.module.css';

const FormControl = ({input, meta, ...props}) => {
  const isError = meta.touched && meta.error;
  return(
    <div className={style.textarea} >
        {props.children}
         {isError &&
          <div className={style.textarea_error}>
            <span className={style.textarea_errorSimbol}>!</span>
            <span className={style.textarea_errorText}>{meta.error}</span>
          </div>
        }
    </div>
  )
}

export const Textarea = (props) => {
  const {input, ...restProps} = props;
  return <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>
}
export const Input = (props) => {
  const {input, ...restProps} = props;
  return <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
}
