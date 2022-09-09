

import {Badge,Descriptions, Image, Space} from 'antd';

function DescriptionBlock()
{
    return(
        <div style={{backgroundColor:"lightgray", borderRadius:"10px"}}>
                <Space size={"large"}>
                    <Badge.Ribbon placement='start' color='green' text="Online">
                        <Badge.Ribbon color='gray' text="LVL 10">
                            <Image width={"100px"} src='https://i.pinimg.com/236x/2c/60/cb/2c60cb34a209daa60ee0b6c53cd35688.jpg'></Image>
                        </Badge.Ribbon>
                    </Badge.Ribbon>

                    <Descriptions>
                        <Descriptions.Item label="Имя:">JustLena</Descriptions.Item>
                        <Descriptions.Item label="Дата регистрации">09.09.2022</Descriptions.Item>
                        <Descriptions.Item label="Подписки">10</Descriptions.Item>
                        <Descriptions.Item label="Клан">Не состоит в клане</Descriptions.Item>
                        <Descriptions.Item label="Был онлайн:">09.09.2022 13:37</Descriptions.Item>
                        <Descriptions.Item label="Подписки">10</Descriptions.Item>
                    </Descriptions>
                </Space>
            </div>
    )
}


export default DescriptionBlock