import Preloader from './../common/Preloader/Preloader';
import { Carousel, Segmented } from 'antd';
import DescriptionBlock from './DescriptionBlock/DescriptionBlock';
import Posts from './Posts/Posts';
import React from "react"
import { useSelector } from 'react-redux';
import { RootState } from "../../redux/redux-store"
import { getProfileDescriptionBlockInfo } from './../../redux/selectors/profile-selector';
import {
    RiseOutlined,
    TeamOutlined,
    FormOutlined,
    CommentOutlined
} from '@ant-design/icons';

function Profile() {
    const desBlockInfo = useSelector((state: RootState) => (getProfileDescriptionBlockInfo(state)))
    const carouselRef: any = React.createRef();

    return (
        <div>
            <DescriptionBlock {...desBlockInfo}></DescriptionBlock>
            <div>
                <br></br>
                <br></br>
                <Segmented block onChange={(value) => carouselRef.current.goTo(value)} options={[
                    { label: 'Статистика', value: 0, disabled: false, icon:<RiseOutlined></RiseOutlined>},
                    { label: 'Решения задач', value: 1, disabled: false, icon:<FormOutlined></FormOutlined>},
                    { label: 'Подписчики и подписки', value: 2, disabled: false, icon:<TeamOutlined></TeamOutlined>},
                    { label: 'Посты', value: 3, disabled: false, icon:<CommentOutlined></CommentOutlined> }
                ]} />
            </div>

            <div>
                <br></br>
                <Carousel speed={300} ref={carouselRef} dots={false}>
                    <div>
                        Статистика
                    </div>
                    <div>
                        Решения задач
                    </div>
                    <div>
                        Подписчики и подписки
                    </div>
                    <div>
                        <Posts></Posts>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Profile