import axios, { AxiosResponse } from 'axios';

class ApiClient {
  static async get<T>(url: string, params?: Record<string, string>): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.get(url, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default ApiClient;


// <T> indicates that the method is generic, meaning it can work with a variety of data types.
// When calling get<T>(...), you specify the type T that the method should expect to receive from the server response. 
// For example, get<User>('https://api.example.com/users') expects data of type User to be returned from the API.