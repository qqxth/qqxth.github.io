import React, {useContext, useState} from 'react';
import {createTask} from "../http/tasksAPI";
import {Context} from "../index";

const TaskCreationForm = () => {

  const {task} = useContext(Context)
  const [text, setText] = useState('')
  const create = async () => {
    try {
      let data
      data = await createTask(text)
      console.log('sending')
      task.setTasks(data)
      setText('')
    } catch (e) {
      alert(e.response.data.message)
    }
  }


return (
  <div className='task-creation opacity-100 front lg:pl-5 py-5 rounded-lg duration-75 mt-5 w-8/12 mx-auto lg:w-6/12'>
    <h1 className='text-2xl font-medium text-center mb-4'>Create Your Task</h1>
    <form
          className='flex flex-col space-y-2 sm:space-y-0 sm:flex sm:flex-row items-center justify-center sm:space-x-2 md:space-x-4'>
      <div className='relative duration-200 sm:w-full w-11/12'>
          <textarea name="text"
                    className='resize-none text-black bg-amber-50 p-2 rounded-lg outline-none  h-24'
                    onChange={e => setText(e.target.value)}
          ></textarea>
      </div>
      <div className='buttons text-white flex'>
        <button type='button' className='rounded-lg p-2 w-max block bg-blue-500' onClick={create}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <path fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"/>
          </svg>


        </button>
      </div>
    </form>
  </div>
);
};

export default TaskCreationForm;