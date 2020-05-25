import axios from 'axios'


class TodoDataService {

    executeHelloWorldPathService(name){
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
    }

    retrieveAllTodos(username){
        return axios.get(`http://localhost:8080/users/${username}/todos`)
    }

    retrieveTodo(username, id){
        return axios.get(`http://localhost:8080/users/${username}/todos/${id}`)
    }

    deleteTodo(username, todoid){
        return axios.delete(`http://localhost:8080/users/${username}/todos/${todoid}`)
    }

    updateTodo(username, todo){
        return axios.put(`http://localhost:8080/users/${username}/todos`, todo)
    }

    createTodo(username, todo){
        return axios.post(`http://localhost:8080/users/${username}/todos`, todo)
    }

}

export default new TodoDataService()