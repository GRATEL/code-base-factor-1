import Evet from './Evet'
const Task = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {
                tasks.map((task) =>(
                    <Evet key = {task.id} task={task} onDelete={onDelete} onToggle={onToggle }/>
                ))
            }
        </>
    )
}

export default Task
