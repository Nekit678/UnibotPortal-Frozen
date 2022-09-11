import { Badge, Descriptions, Image, Space } from 'antd';

type DescriptionBlockProps = {
    userLogin:string | null,
    userLvl:number | null,
    clan:string | null,
    clanId:number | null,
    online:boolean | null,
    registerData:string | null,
    lastOnlineData: string | null,
    followingCount: number | null,
    followersCount: number | null
}

function DescriptionBlock(props: DescriptionBlockProps)  //!change type!
{
    return (
        <div style={{ backgroundColor: "lightgray", borderRadius: "10px" }}>
            <Space size={"large"}>
                <Badge.Ribbon placement='start' color='green' text="Online">
                    <Badge.Ribbon color='gray' text="LVL 10">
                        <Image width={"100px"} src='https://i.pinimg.com/236x/2c/60/cb/2c60cb34a209daa60ee0b6c53cd35688.jpg'></Image>
                    </Badge.Ribbon>
                </Badge.Ribbon>

                <Descriptions>
                    <Descriptions.Item label="Имя">{props.userLogin}</Descriptions.Item>
                    <Descriptions.Item label="Дата регистрации">{props.registerData}</Descriptions.Item>
                    <Descriptions.Item label="Подписчики">{props.followersCount}</Descriptions.Item>
                    <Descriptions.Item label="Клан">{props.clan}</Descriptions.Item>
                    <Descriptions.Item label="Был онлайн">{props.lastOnlineData}</Descriptions.Item>
                    <Descriptions.Item label="Подписки">{props.followingCount}</Descriptions.Item>
                </Descriptions>
            </Space>
        </div>
    )
}


export default DescriptionBlock