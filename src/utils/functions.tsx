/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const baseUrl = 'https://jony-back.vercel.app'; 
// const baseUrl = 'http://localhost:3000'; 

export const callApi = async (
    method?: string,       
    url?: string,          
    data: any = null,      
    headers: any = {}      // Add headers as a new parameter
  ) => {
    const apiUrl = `${baseUrl}${url}`;   
  
    try {
      const token = localStorage.getItem('token');  
      const response = await axios({
        method,
        url: apiUrl,
        data,
        headers: {
          'Content-Type': 'application/json',
          ...headers,  // Spread the incoming headers
          Authorization: token ? `Bearer ${token}` : '',  
        },
      });
  
      return response.data; 
    } catch (error) {
      console.error('API Error:', error);
      return null; // Return null or handle the error as needed
    }
  };
  