import {axiosService} from "./axios.service";
import {urls} from "../configs";
import {IUser} from "../interfaces";

export const userService = {
    getAll: () => axiosService.get<IUser[]>(urls.users)
}