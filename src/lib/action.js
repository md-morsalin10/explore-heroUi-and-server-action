import { revalidatePath } from "next/cache";
import { postTask, updateTask } from "./tasks";
import { redirect } from "next/navigation";


export const createATasks =async (formData)=>{
    "use server"

    const title = formData.get("title");
    const description = formData.get("description");
    const priority = formData.get("priority");
    const status = formData.get("status");
    const assignedTo = formData.get("assignedTo");

    const newTasks = {title,description,priority,status,assignedTo};

    console.log(newTasks);

   const res = await postTask(newTasks);
   if(res.ok){
    revalidatePath("/tasks") // revalidate the tasks page after creating a new task
   }
   return res
}

export const createAnotherTask = async(formData)=>{
    "use server"
    const newTasks = Object.fromEntries(formData.entries());

    const res = await updateTask(newTasks);

    if(res.ok){
        revalidatePath('/tasks');
        redirect("/tasks")
    }
    return res
}