import axios from 'axios'
import {HEROKU_API_URL} from '../../Constants'

class HelloWorldService {

    executeHelloWorldService(){
        return axios.get(`${HEROKU_API_URL}/hello-world-bean`)
    }

    executeHelloWorldPathService(name){
        // let username = 'juan';
        // let password = 'admin';

        // // we encode the user name and password with base64 using window.btoa
        // let basicAuthHeather = 'Basic ' + window.btoa(username + ":" + password);

        return axios.get(`${HEROKU_API_URL}/hello-world/path-variable/${name}`
        // ,
        //     {
        //         headers: {
        //             authorization: basicAuthHeather
        //         }
        //     }
        )
    }

}

export default new HelloWorldService()