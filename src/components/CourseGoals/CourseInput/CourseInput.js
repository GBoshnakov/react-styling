import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);

    if (event.target.value.length > 2) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (enteredValue.length <= 2) {
      setIsValid(false);
    } else {
      props.onAddGoal(enteredValue);
      setEnteredValue('')
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid && 'invalid'}`}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
