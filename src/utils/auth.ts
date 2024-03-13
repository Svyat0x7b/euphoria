const isTokenValid = (): boolean => {
    const currentDate = new Date();
    const expirationStringDate = getExpirationDate();

    if (!expirationStringDate) {
        return false;
    }
    const expirationDate = new Date(expirationStringDate);
    if (currentDate.getTime() >= expirationDate.getTime()) {
        return false;
    }
    return true;
};

const logout = (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
};

const getToken = (): string | undefined => {
    const token = localStorage.getItem('token');
    if (!token) {
        return;
    }
    return token;
};

const getExpirationDate = (): string | undefined => {
    const date = localStorage.getItem('expirationDate');
    if (!date) {
        return;
    }
    return date;
};

const setToken = (token: string): void => {
    const currentDate = new Date();
    const expirationDate = new Date(currentDate.getTime() + 2 * 60 * 60 * 1000);

    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate.toISOString());
};

export interface UserDataType {
    email: string;
    firstname: string;
    lastname: string;
    address: string;
    id: string;
}

const getUserdata = (): UserDataType | undefined => {
    const userJSON = localStorage.getItem('user');

    if (!userJSON) return;

    const userObj = JSON.parse(userJSON);
    return userObj;
};

const setUserdata = (userObj: UserDataType): void => {
    const userJSON = JSON.stringify(userObj);
    localStorage.setItem('user', userJSON);
};

export { getToken, setToken, setUserdata, getUserdata, isTokenValid, logout };
