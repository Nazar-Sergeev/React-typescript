import {FC} from "react";

import {IPost} from "../../interfaces";

const Post: FC<{ post: IPost }> = ({post: {id, body, userId, title}}) => {
    return (
        <div>
            <h5>{id}) - {userId}</h5>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};


export {Post};