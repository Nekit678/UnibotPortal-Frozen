import Preloader from './../common/Preloader/Preloader';
import { Badge, Descriptions, Image, Segmented, Space } from 'antd';



function Profile() {
    return (
        <div>
            <Space size={"large"}>
                <Badge.Ribbon placement='start' color='green' text="Online">
                    <Badge.Ribbon color='red' text="LVL 10">
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
            <div>
                <br></br>
                <br></br>
                <Segmented block options={[
                    'Daily',
                    { label: 'Weekly', value: 'Weekly', disabled: true },
                    'Monthly',
                    { label: 'Quarterly', value: 'Quarterly', disabled: true }
                ]} />
            </div>


        </div>


    )
}

export default Profile