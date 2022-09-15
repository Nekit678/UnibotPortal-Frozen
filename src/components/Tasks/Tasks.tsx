import { Card, Carousel } from 'antd';
import { useState } from 'react';
import Task from './Task';
import React from "react"
import Level from './Level';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/redux-store';
import { getTasksListId } from '../../redux/selectors/tasks-selectors';

const gridStyle: React.CSSProperties = {
    width: '20%',
    textAlign: 'center'
};

function Tasks() {
    const [task, setTask] = useState(0)
    const carouselRef: any = React.createRef();
    const tasksListId = useSelector(getTasksListId)

    function selectTask(value:number) {
        setTask(value)
        carouselRef.current.next()
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <Carousel ref={carouselRef} dots={false}>
                <div>
                    <Card style={{ backgroundColor: "lightgray", borderRadius: "10px" }} title="Выбери уровень!">
                        {tasksListId.map((item) => (<Card.Grid key={item} style={gridStyle}>
                            <Task selectTask={(value: number) => selectTask(value)} taskNumber={item}></Task>
                        </Card.Grid>))}
                    </Card>
                </div>
                <div>
                    <Level back={() => carouselRef.current.prev()} num={task}></Level>
                </div>
            </Carousel>

        </div>
    )
}

export default Tasks