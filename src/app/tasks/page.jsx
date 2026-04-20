import TasksCard from "@/components/TasksCard";
import { getTask } from "@/lib/tasks";


const TasksData =async () => {
    const tasks =await getTask();
    return (
        <div className="container mx-auto py-8">
            <p>Tasks:{tasks.length}</p>
            <div className="grid grid-cols-3 gap-5">
                {
                    tasks.map((task,ind)=> <TasksCard task={task} key={ind}></TasksCard>)
                }
            </div>
        </div>
    );
};

export default TasksData;