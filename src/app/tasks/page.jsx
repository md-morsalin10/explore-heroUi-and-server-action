import AddTasks from "@/components/AddTasks";
import TasksCard from "@/components/TasksCard";
import { createATasks } from "@/lib/action";
import { getTask } from "@/lib/tasks";
import { Button } from "@heroui/react";
import Link from "next/link";


const TasksData =async () => {
    const tasks =await getTask();
    return (
        <div className="container mx-auto py-8">
            <p>Tasks:{tasks.length}</p>
            <div className="flex justify-center items-center py-5">
                <AddTasks createATasks={createATasks}/>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    tasks.map((task,ind)=> <TasksCard task={task} key={ind}></TasksCard>)
                }
            </div>
            <div>
                <Button><Link href={"/tasks/newTasks"}>AddNewTasks</Link></Button>
            </div>
        </div>
    );
};

export default TasksData;