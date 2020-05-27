import axios from 'axios';


export function apiCall(method,type,  data){
    return new Promise((resolve, reject) => {
        return axios[method](`http://opentable.herokuapp.com/api${type}`, {
            params: {
                ...data
            }
        })
        .then(res => {
            console.log(res)
            return resolve(res.data);
        })
        .catch(err => {
            console.log(err)
            return reject(err)
        });
    })
}