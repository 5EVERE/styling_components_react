import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import styles from "./TaskInput.module.css";

// const FormatControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #c8e1e4;
//     border-color: #00358b;
//   }
// `;

const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");
  const [isValid, setIsValid] = useState(true);

  const taskInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setInputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputText.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTask(inputText);
  };

  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <FormatControl invalid={!isValid}>
  //       <label>Задачи</label>
  //       <input type="text" onChange={taskInputChangeHandler} />
  //     </FormatControl>
  //     <Button type="submit">Добавить Задачу</Button>
  //   </form>
  // );
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles["form-control"]} ${!isValid && styles.invalid}`}>
        <label>Задачи</label>
        <input type="text" onChange={taskInputChangeHandler} />
      </div>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
