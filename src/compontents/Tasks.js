import React from 'react';
import TaskCreationForm from "./TaskCreationForm";
import TasksList from "./TasksList";
import {observer} from "mobx-react-lite";

const Tasks = observer(() => {

  return (
    <div className="">
      <TaskCreationForm/>
      <TasksList/>
    </div>
  );
});

export default Tasks;