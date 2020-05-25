import axios from 'axios'
import {API_URL} from '../../Constants'

export const USERNAME_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthenticationService {

    getBasicAuthToken(username, password){
        return 'Basic ' + window.btoa(username + ":" + password);
    }

    getJWTToken(token){
        return 'Bearer ' + token;
    }


    callBasicAuthenticationService(username, password){
        return axios.get(`${API_URL}/basicauth`,
        {
            headers: {
                authorization: this.getBasicAuthToken(username, password)
            }
        })
    }

    callJWTAuthenticationService(username, password){
        return axios.post(`${API_URL}/authenticate`,
        {
            username,
            password
        })
    }


    registerSuccessfullLoging(username, password){
        sessionStorage.setItem(USERNAME_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.getBasicAuthToken(username, password));
    }

    registerSuccessfullLogingJWT(username, token){
        sessionStorage.setItem(USERNAME_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.getJWTToken(token));
    }

    setupAxiosInterceptors(token){
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = token;
                }
                return config;
            }
        );
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem(USERNAME_NAME_SESSION_ATTRIBUTE_NAME)
        if(user===null) return false
        return true
    }

    getLoggedInUser(){
        let user = sessionStorage.getItem(USERNAME_NAME_SESSION_ATTRIBUTE_NAME)
        if(user === null) return ''
        return user
    }

    logout(){
        sessionStorage.removeItem(USERNAME_NAME_SESSION_ATTRIBUTE_NAME)
    }
}

export default new AuthenticationService()