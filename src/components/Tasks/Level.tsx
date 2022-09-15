import Editor from "@monaco-editor/react"
import { Button, Input, Space } from "antd"
import { Col, Row } from 'antd';
import s from './Level.module.css'

const { TextArea } = Input

function Level(props: { num: number, back: Function }) {
    return (
        <div>
            LEVEL{props.num}
            <div>
                Описание задачиОписание задачиОписание задачиОписание задачи
                Описание задачиОписание задачиОписание задачиОписание задачи
                Описание задачиОписание задачиОписание задачиОписание задачи
                Описание задачиОписание задачиОписание задачиОписание задачиОписание задачи
                Описание задачиОписание задачиОписание задачи
            </div>
            <p></p>
            <Button type="primary" onClick={() => props.back()}>Back</Button>
            <p></p>
            <div>
                <Row gutter={10}>
                    <Col span={14}>
                            <Editor className={s.codeEditor} theme="vs-dark" height="500px" defaultLanguage="python" value={"def test(x):\n\tprint(x)\n\ntest(12)"}></Editor>
                    </Col>
                    <Col span={10}>
                        <Row gutter={[10, 10]}>
                            <Col span={24}>
                                <TextArea value={"Тест не пройден!"} disabled style={{ height: "300px", backgroundColor: "black", color: "red", borderRadius: "10px" }}></TextArea>
                            </Col>
                            <Col span={24}>
                                <TextArea placeholder="Введите значение input()" style={{ height: "140px", borderRadius: "10px" }}></TextArea>
                            </Col>
                            <Col span={10}>
                                <Button style={{ width: "100%" }} type="dashed" size="large">Тестирование</Button>
                            </Col>
                            <Col span={14}>
                                <Button style={{ width: "100%" }} type="primary" size="large">Отправить на проверку</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Level