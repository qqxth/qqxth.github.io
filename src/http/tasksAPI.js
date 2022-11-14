import {$authHost} from "./index";


export const createTask = async (text) => {
  await $authHost.post('api/tasks/task/', {text})
  return getTasks()
}

export const getTasks = async () => {
  const {data} = await $authHost.get('api/task-list/')
  return data
}


export const changeTaskStatus = async (id, taskData) => {
  const {data} = await $authHost.put('api/tasks/task/'+id+'/', {taskData})
  return {data}
}

export const deleteTask = async (id) => {
  await $authHost.delete('api/tasks/task/'+id+'/')
  return getTasks()
}