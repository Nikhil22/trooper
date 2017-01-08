import UserType from '../types/UserType';
import { User } from '../models/user';

const user = {
    type: UserType,
    resolve({ request }) {
        return request.user && User.findOne({
            where: { id: request.user.id }
        })
    },
};

export default user;
