import {FC} from "react";

import {IUser} from "../../interfaces";

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user:{username,id,email,name}}) => {
    return (
        <div>
            <h3>{id}) {name} - {username}</h3>
            <h5>{email}</h5>
        </div>
    );
};


export {User};