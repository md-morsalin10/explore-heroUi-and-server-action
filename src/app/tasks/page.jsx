import { getTask } from "@/lib/tasks";


const TasksData =async () => {
    const tasks =await getTask();
    return (
        <div>
            <p>Tasks:{tasks.length}</p>
        </div>
    );
};

export default TasksData;