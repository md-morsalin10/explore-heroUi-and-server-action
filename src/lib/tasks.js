import tasks from "../data/tasks.json"



export const getTask =async()=>{
    return tasks;
}

export const postTask =async (newTasks)=>{
    newTasks.id=tasks.length+1;
    tasks.unshift(newTasks);

    return {ok:true,message:"Task created successfully"};
}

export const updateTask =async(newTasks)=>{
    newTasks.id = tasks.length+1;
    tasks.unshift(newTasks);
    return {ok:true,message:"Task updated successfully"};
} 

