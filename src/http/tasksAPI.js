import {$authHost} from "./index";


export const createTask = async (text) => {
  await $authHost.post('api/tasks/task/', {text})
  return await getTasks()
}

export const getTasks = async () => {
  const {data} = await $authHost.get('api/task-list/')
  return data
}


export const changeTaskStatus = async (id, text, is_did) => {
  await $authHost.put('api/tasks/task/'+id+'/', {"text":text, "is_did":is_did})
  return await getTasks()
}

export const deleteTask = async (id) => {
  await $authHost.delete('api/tasks/task/'+id+'/')
  return await getTasks()
}