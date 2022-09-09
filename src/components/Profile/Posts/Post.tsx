import { Avatar, Comment, Tooltip } from "antd"
import { createElement, useState } from 'react';
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';

function Post() {
    const [likes, setLikes] = useState(10);
    const [dislikes, setDislikes] = useState(10);
    const [action, setAction] = useState<string | null>(null);

    const like = () => {
        if (action !== "liked") {
            setLikes(likes + 1);
            setDislikes(dislikes - 1);
            setAction('liked');
        }
    };

    const dislike = () => {
        if (action !== "disliked") {
            setLikes(likes - 1);
            setDislikes(dislikes + 1);
            setAction('disliked');
        }
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className="comment-action">{dislikes}</span>
            </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];

    return (
        <Comment
            actions={actions}
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
    )
}


export default Post