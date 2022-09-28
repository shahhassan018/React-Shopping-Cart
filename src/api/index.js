import axios from 'axios';
import { API_URL } from '../constants/ApiConstant';


export const client = axios.create({
    baseURL: API_URL,
});