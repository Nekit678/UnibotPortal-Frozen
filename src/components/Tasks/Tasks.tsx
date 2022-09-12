import { Card, Carousel } from 'antd';
import { useState } from 'react';
import Task from './Task';
import React from "react"
import Level from './Level';
const gridStyle: React.CSSProperties = {
    width: '20%',
    textAlign: 'center',
};
const carouselRef: any = React.createRef();

let test = [1,2,3,4,5,6,7,8,9,10]

function Tasks() {
    const [task, setTask] = useState(0)

    return (
        <div>
            <Carousel ref={carouselRef} dots={false}>
                <div>
                    <Card style={{ backgroundColor: "lightgray", borderRadius: "10px" }} title="Выбери уровень!">
                        {test.map((item)=>(<Card.Grid key={item} style={gridStyle}>
                            <Task taskNumber={item}></Task>
                        </Card.Grid>))}
                    </Card>
                </div>
                <div>
                    <Level></Level>
                </div>
            </Carousel>

        </div>
    )
}

export default Tasks