import { Avatar,Comment} from 'antd';

function Posts() {

    return (
        <div>
            <Comment
                author={<a>Han Solo</a>}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
                    <p>
                        Тестовый пост Тестовый пост Тестовый пост Тестовый пост Тестовый пост
                        Тестовый пост Тестовый пост Тестовый пост Тестовый пост Тестовый пост Тестовый пост Тестовый пост
                        Тестовый пост Тестовый пост Тестовый пост Тестовый пост Тестовый пост Тестовый пост
                    </p>
                }
            />
        </div>
    )

}


export default Posts