import axios from 'axios'
import {HEROKU_API_URL} from '../../Constants'


class TodoDataService {

    executeHelloWorldPathService(name){
        return axios.get(`${HEROKU_API_URL}/hello-world/path-variable/${name}`)
    }

    retrieveAllTodos(username){
        return axios.get(`${HEROKU_API_URL}/jpa/users/${username}/todos`)
    }

    retrieveTodo(username, id){
        return axios.get(`${HEROKU_API_URL}/jpa/users/${username}/todos/${id}`)
    }

    deleteTodo(username, todoid){
        return axios.delete(`${HEROKU_API_URL}/jpa/users/${username}/todos/${todoid}`)
    }

    updateTodo(username, todo){
        return axios.put(`${HEROKU_API_URL}/jpa/users/${username}/todos`, todo)
    }

    createTodo(username, todo){
        return axios.post(`${HEROKU_API_URL}/jpa/users/${username}/todos`, todo)
    }

}

export default new TodoDataService()