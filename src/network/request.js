import axios from 'axios';

export function request(config) { 
    //  生成axios示例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/n3',
        timeout: 5000
    });
    //  拦截器
    instance.interceptors.request.use(config => {
        // console.log(config);
        return config;
    }, err => {
        // console.log(err);
    })
    instance.interceptors.response.use((res) => {
        // console.log(res);
        return res;
    }, err => {
        // console.log(err);
    });

    // 返回axios实例
    return instance(config)
 }