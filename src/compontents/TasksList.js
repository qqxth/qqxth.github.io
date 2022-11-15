import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import TaskItem from "./TaskItem";
import {getTasks} from "../http/tasksAPI";


const TasksList = observer(() => {
  const {task} = useContext(Context)

  useEffect(() => {
    getTasks().then(data => task.setTasks(data))
  }, [])

  return (
    <div className='flex flex-col space-y-10 my-20 w-10/12 md:w-8/12 lg:w-8/12 mx-auto'>
      {task.tasks.map(task =>
        <TaskItem key={task.id} thisTask={task}/>
      )}
    </div>
  );
});

export default TasksList;