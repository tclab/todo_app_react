import React , {Component} from 'react'
import {BrowserRouter as Rourter, Route, Redirect} from 'react-router-dom'

import AuthenticationService from '../services/AuthenticationService'

class AuthenicatedRoute extends Component{
    render () {
        if(AuthenticationService.isUserLoggedIn()){
            //Sread operator
            return (<Route {...this.props}/>)
        } else {
            return (<Redirect to="/login"/>)
        }
    }
}

export default AuthenicatedRoute