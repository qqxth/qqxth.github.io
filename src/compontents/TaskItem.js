import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {changeTaskStatus, deleteTask, getTasks} from "../http/tasksAPI";
import {Context} from "../index";

const TaskItem = observer(({task}) => {

  const {tasks} = useContext(Context)

  const deleteThis = async (id) => {
    try {
      let data
      await deleteTask(id)
      console.log('sending')
      const new_tasks = await getTasks()
      tasks.setTasks(new_tasks)
    } catch (e) {
      alert(e.response.data.message)
    }

  }


  return (
    <div id={task.id}
         className={task.is_did
           ?
           ' opacity-30 front lg:pl-5 py-5 rounded-lg duration-75'
           :
           'opacity-100 front lg:pl-5 py-5 rounded-lg duration-75'}>
      <form action=""
            className='flex flex-col space-y-2 sm:space-y-0 sm:flex sm:flex-row items-center justify-center sm:space-x-2 md:space-x-4'>
        <div className='relative duration-200 w-11/12 sm:w-7/12 lg:w-8/12'>
          <span className={task.onEdit
            ?
            "flex h-2 w-2 absolute -right-0.5 -top-0.5 opacity-100"
            :
            "flex h-2 w-2 absolute -right-0.5 -top-0.5 opacity-0 hidden"
          }>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          <textarea name="" readOnly={!task.onEdit}
                    className='resize-none text-black bg-amber-50 p-2 rounded-lg outline-none w-full h-24'
                    value={task.text}
          ></textarea>
          <input type="text" name='is_did' value={!task.is_did} className='hidden'/>
        </div>
        <div className='buttons text-white flex sm:w-3/12'>
          <button type='button' className='bg-green-500 rounded-lg p-2 w-max block'
                  onClick={() => changeTaskStatus(task.id, !task.is_did)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-6 h-6 lg:w-8 lg:h-8">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"/>
            </svg>


          </button>
          {!task.is_did
            ?
            <button type='button' className='bg-blue-500 rounded-lg p-2 w-max block'
                    onClick={() => task.onEdit = !task.onEdit}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" className="w-6 h-6 lg:w-8 lg:h-8">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
              </svg>
            </button>
            :
            task.onEdit = false
          }
          <button onClick={() => deleteThis(task.id)} type='button' className='bg-red-500 rounded-lg p-2 w-max block'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="w-6 h-6 lg:w-8 lg:h-8">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
            </svg>

          </button>

        </div>
      </form>
    </div>
  );
});

export default TaskItem;