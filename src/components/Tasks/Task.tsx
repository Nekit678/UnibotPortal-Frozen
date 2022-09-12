
function Task(props: { taskNumber: number }) {
    return (
        <div>
            <button value={props.taskNumber} onClick={(event) => alert(event.currentTarget.value)}>
                Уровень {props.taskNumber}
                <img width={50} src="https://i.pinimg.com/236x/2c/60/cb/2c60cb34a209daa60ee0b6c53cd35688.jpg"></img>
            </button>
        </div>)
}

export default Task