import Preloader from './../common/Preloader/Preloader';
import { Avatar,Carousel, Comment,Segmented} from 'antd';
import DescriptionBlock from './DescriptionBlock/DescriptionBlock';
import Posts from './Posts/Posts';



function Profile() {
    return (
        <div>
            <DescriptionBlock></DescriptionBlock>
            <div>
                <br></br>
                <br></br>
                <Segmented block options={[
                    'Статистика',
                    { label: 'Решения задач', value: 'Weekly', disabled: true },
                    'Подписчики и подписки',
                    { label: 'Посты', value: 'Quarterly', disabled: false }
                ]} />
            </div>

            <div>
                <br></br>

                <Carousel autoplay dots={false}>
                    {/* <div>
                        Статистика
                    </div>
                    <div>
                        Решения задач
                    </div>
                    <div>
                        Подписчики и подписки
                    </div> */}
                    <div>
                        <Posts></Posts>
                    </div>
                </Carousel>
            </div>


        </div>


    )
}

export default Profile