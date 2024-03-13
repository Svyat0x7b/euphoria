import React, { useState } from 'react';
import { selectUser } from '../../redux/user/user-slice';
import { useAppSelector } from '../../redux/hooks';

const MyInfo = () => {
    const user = useAppSelector(selectUser);

    if (user.token === null) {
        return <section>You are not logged In!</section>;
    }

    return <section>Welcome, {user.firstname}</section>;
};

export default MyInfo;
