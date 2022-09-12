import { Badge, Descriptions, Image, Space } from 'antd';

type DescriptionBlockProps = {
    userLogin:string | null,
    userPhoto: string,
    userLvl:number | null,
    clan:string | null,
    clanId:number | null,
    online:boolean | null,
    registerData:string | null,
    lastOnlineData: string | null,
    followingCount: number | null,
    followersCount: number | null
}

function DescriptionBlock(props: DescriptionBlockProps) //!color LVL logic!
{
    return (
        <div style={{ backgroundColor: "lightgray", borderRadius: "10px" }}>
            <Space size={"large"}>
                <Badge.Ribbon placement='start' color={props.online?"green":"gray"} text={props.online?"Online":"Offline"}>
                    <Badge.Ribbon color='red' text={`LVL ${props.userLvl}`}>
                        <Image width={"100px"} src={props.userPhoto} style={{borderTopLeftRadius:10,borderBottomLeftRadius:10}}></Image>
                    </Badge.Ribbon>
                </Badge.Ribbon>

                <Descriptions>
                    <Descriptions.Item label="Имя">{props.userLogin}</Descriptions.Item>
                    <Descriptions.Item label="Дата регистрации">{props.registerData}</Descriptions.Item>
                    <Descriptions.Item label="Подписчики">{props.followersCount}</Descriptions.Item>
                    <Descriptions.Item label="Клан">{props.clan?props.clan:"Не состоит в клане"}</Descriptions.Item>
                    <Descriptions.Item label="Был онлайн">{props.online?"Сейчас онлайн!":props.lastOnlineData}</Descriptions.Item>
                    <Descriptions.Item label="Подписки">{props.followingCount}</Descriptions.Item>
                </Descriptions>
            </Space>
        </div>
    )
}


export default DescriptionBlock