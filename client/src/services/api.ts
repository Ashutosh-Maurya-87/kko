import axios from 'axios';
import * as utils from './cookie';
import {API_CONFIG} from '../config';

export function fetch(pathParam: string){
    return axios
        .get(API_CONFIG.baseURL + pathParam, {headers:{'Authorization': `${utils.getCookie('access_token')}`}});
}

export function store(pathParam:string, data:any) {
    return axios   
        .post(API_CONFIG.baseURL + pathParam, data, {headers:{'Authorization' : `${utils.getCookie('access_token')}`}});
}

export function update(pathParam: string, data: any) {
    return axios   
        .put(API_CONFIG.baseURL + pathParam, data, {headers : {'Authorization': `${utils.getCookie('access_token')}`}});
}

export function patch(pathParam: string, data:any) {
    return axios
        .patch(API_CONFIG.baseURL + pathParam, data, {headers: {'Authorization':`${utils.getCookie('access_token')}`}});
}

export function destroy(pathParam:any){
    return axios.delete(API_CONFIG.baseURL + pathParam, {headers: {'Authorization':`${utils.getCookie('access_token')}`}});
}

export function storeWithoutHeader(pathParam : string, data:any){
    return axios.post(API_CONFIG.baseURL + pathParam, data, {headers : {'Authorization': `${utils.getCookie('access_token')}`}});
}

export function fetchWithoutHeader(pathParam : string) {
    return axios.get(API_CONFIG.baseURL + pathParam);
}

export function fileUpload(url:string, formValue:any) {
    var options ={
        headers:{
            'Content-Type' :'multipart/form-data',
            'Authorization' : `${utils.getCookie('idToken')}`,
        },
    };
    return axios.put(API_CONFIG.baseURL + url, formValue, options);
}

export function ip(url:any) {
    var headers = {'Content-Type': 'application/json'}
    return axios.post(`${url}`, {headers});
}

export function postAsJsonLocal(url:any, formValue: any, headers: {'Content-Type':string;}) {
    return axios.post(`${API_CONFIG.baseURL}${url}`, formValue, {headers});
}

export function get(pathParam:string){
    return axios.get(API_CONFIG.baseURL + pathParam, {headers: {'Authorization':`${utils.getCookie('access_token')}`}});
}