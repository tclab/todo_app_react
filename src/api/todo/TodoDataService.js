import axios from 'axios'
import {API_URL} from '../../Constants'


class TodoDataService {

    executeHelloWorldPathService(name){
        return axios.get(`${API_URL}/hello-world/path-variable/${name}`)
    }

    retrieveAllTodos(username){
        return axios.get(`${API_URL}/users/${username}/todos`)
    }

    retrieveTodo(username, id){
        return axios.get(`${API_URL}/users/${username}/todos/${id}`)
    }

    deleteTodo(username, todoid){
        return axios.delete(`${API_URL}/users/${username}/todos/${todoid}`)
    }

    updateTodo(username, todo){
        return axios.put(`${API_URL}/users/${username}/todos`, todo)
    }

    createTodo(username, todo){
        return axios.post(`${API_URL}/users/${username}/todos`, todo)
    }

}

export default new TodoDataService()