import axios from 'axios';

const customAxios = axios.create();

axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

customAxios.interceptors.response.use(
    response => {
      if (response.data.code === 2) {
        window.location.href = '/';
        return;
      }  
      return response.data;
    },
    error => {
      return Promise.reject(error.response.data);
    }
);


export default {
    request ({
        url,
        params,
        responseType = 'json',
        method = 'post'
    }) {
        let paramsObj = method === 'post' ? {
            data: params
        } : {
            params: params
        };
        let user = localStorage.getItem('duanduan_user');
        if (user) {
            let token = JSON.parse(user).meta.access_token;
            paramsObj.headers = {
                'Authorization': `Bearer ${token}`
            }
        }
        return customAxios({
            url: `/api/${url}`,
            method,
            ...paramsObj,
            responseType
            // headers: {
            //     'Content-Type': 'application/x-www-form-urlencoded'
            // }
        }).then(data => {
            return data;
        }).catch(error => {
            return Promise.reject(error);
        })
    }
}
