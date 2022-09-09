

import {Badge,Descriptions, Image, Space} from 'antd';

function DescriptionBlock()
{
    return(
        <div style={{backgroundColor:"lightgray", borderRadius:"10px"}}>
                <Space size={"large"}>
                    <Badge.Ribbon placement='start' color='green' text="Online">
                        <Badge.Ribbon color='gray' text="LVL 10">
                            <Image width={"100px"} src='https://www.codewars.com/packs/assets/logo.61192cf7.svg'></Image>
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