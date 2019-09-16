export const required = (value) => {
  if(value) value = value.trim();
  if(!value) return 'Field is required';
  return undefined;
}

export const minMaxLength = (minLength) => (maxLength) => (value) => {
  if(value) value = value.trim();
  if(value && value.length > maxLength) return `Max length is ${maxLength} simbols`;
  if(value && value.length < minLength) return `Min length is ${minLength} simbols`;
  return undefined;
}



// const maxLenght = max => value =>
//   value.length <= max ? value : value.slice(0,max);

//   <div>
//     <Field component='input' name="test" type="number"  normalize={maxLenght(4)}/>
//   </div>
