import axios from 'axios'
import {API_URL} from '../../Constants'
import {JPA_API_URL} from '../../Constants'


class TodoDataService {

    executeHelloWorldPathService(name){
        return axios.get(`${API_URL}/hello-world/path-variable/${name}`)
    }

    retrieveAllTodos(username){
        return axios.get(`${JPA_API_URL}/users/${username}/todos`)
    }

    retrieveTodo(username, id){
        return axios.get(`${JPA_API_URL}/users/${username}/todos/${id}`)
    }

    deleteTodo(username, todoid){
        return axios.delete(`${JPA_API_URL}/users/${username}/todos/${todoid}`)
    }

    updateTodo(username, todo){
        return axios.put(`${JPA_API_URL}/users/${username}/todos`, todo)
    }

    createTodo(username, todo){
        return axios.post(`${JPA_API_URL}/users/${username}/todos`, todo)
    }

}

export default new TodoDataService()