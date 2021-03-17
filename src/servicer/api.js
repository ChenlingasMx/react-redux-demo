import { post, get } from '../utils/fetchUtil';
import qs from 'qs';
const { stringify } = qs;

//get方式
export async function fetchData1(params) {
  return get(`/api/bbb?${stringify(params)}`);
}


//post方式
export async function fetchData2(params) {
  return post(`/api/aaa`, params);
}