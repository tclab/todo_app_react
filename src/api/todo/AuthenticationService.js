import axios from 'axios'

class AuthenticationService {

    getBasicAuthToken(username, password){
        return 'Basic ' + window.btoa(username + ":" + password);
    }


    callBasicAuthenticationService(username, password){
        return axios.get('http://localhost:8080/basicauth',
        {
            headers: {
                authorization: this.getBasicAuthToken(username, password)
            }
        })
    }


    registerSuccessfullLoging(username, password){
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.getBasicAuthToken(username, password));
    }

    setupAxiosInterceptors(basicAuth){
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = basicAuth;
                }
                return config;
            }
        );
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
        return true
    }

    getLoggedInUser(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user === null) return ''
        return user
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }
}

export default new AuthenticationService()