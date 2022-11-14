import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import TaskItem from "./TaskItem";


const TasksList = observer(() => {

  const {task} = useContext(Context)

  return (
    <div className='flex flex-col space-y-10 my-20 w-10/12 md:w-8/12 lg:w-8/12 mx-auto '>
      {task.tasks.map(task =>
        <TaskItem key={task.id} task={task}/>
      )}
    </div>
  );
});

export default TasksList;