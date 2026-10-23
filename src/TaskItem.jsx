function TaskItem(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.avalable}</p>
        </div>
    );
}

export default TaskItem;