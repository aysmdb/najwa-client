import { AsyncStorage } from 'react-native';

export const USER_KEY = 'UserToken';

export const SubmitLogin = (data) => {
    return fetch("http://192.168.1.129:5000/Account/Login", {
        method: 'POST',
        headers: {
            'cache-control': 'no-cache',
            'accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            UserName: data.username,
            Password: data.password
        })
    });
};

export const SubmitRegister = (data) => {
    return fetch("http://192.168.1.129:5000/Account/Register", {
        method: 'POST',
        headers: {
            'cache-control': 'no-cache',
            'accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            UserName: data.username,
            PhoneNumber: data.phone,
            Password: data.password
        })
    });
};

export const LogOut = () => AsyncStorage.removeItem(USER_KEY);

export const isLogin = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_KEY)
            .then(res => {

                if(res !== null){
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
}