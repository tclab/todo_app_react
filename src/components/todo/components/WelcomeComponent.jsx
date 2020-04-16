import React, {Component} from 'react'
import {BrowserRouter, Link} from 'react-router-dom'

class WelcomeComponent extends Component{
    constructor(props){
        super(props)

        this.getWelcomeMessage = this.getWelcomeMessage.bind(this)

    }

    render(){
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">   
                    Welcome {this.props.match.params.name} to TODO app!!

                    <br/>
                    You can manage your todos <Link to="/todos">here</Link>. 
                </div>

                <div className="container">   
                    <button className="btn btn-success" onClick={this.getWelcomeMessage}>Welcome</button>
                </div>

            </>

        )
    }

    getWelcomeMessage(event){
        console.log("Get welcome message")
    }
}

export default WelcomeComponent