import axios from 'axios';
const API_BASE_URL = 'http://localhost:3000/api/user';

const api= axios.create({
    baseURL: API_BASE_URL,
});

export const signup= async(userData) =>{
    try{
        const response=await api.post('/Signup', userData);
        return response.data;

    }catch(error){
        console.error('Error during Signup', error);
        throw error;
    }
}

