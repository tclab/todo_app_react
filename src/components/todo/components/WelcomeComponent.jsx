import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import HelloWorldService from '../../../api/todo/HelloWorldService'

class WelcomeComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            servicemessage: ''
        }

        this.getWelcomeMessage = this.getWelcomeMessage.bind(this)
        this.handleSuccesfullResponse = this.handleSuccesfullResponse.bind(this)
        this.handleErrorResponse = this.handleErrorResponse.bind(this) 
        this.handleTodoListBtn = this.handleTodoListBtn.bind(this)
    }

    render(){
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">   
                    Welcome <b>{this.props.match.params.name}</b> to <b>Listmaniac</b>
                </div>

                <div className="container">
                    <button className="btn btn-success" onClick={() => this.handleTodoListBtn()}>Go to your todo list</button>
                </div>


                
                {/*Test section*/}
                <div className="container">   
                    Test welcome message <Link onClick={() => this.getWelcomeMessage()}>TEST</Link>. 
                </div>
                <div className="container">   
                    <h1>{this.state.servicemessage}</h1>
                </div>

            </>

        )
    }

    getWelcomeMessage(event){
        HelloWorldService.executeHelloWorldPathService(this.props.match.params.name)
        .then(response => this.handleSuccesfullResponse(response))
        .catch(error => this.handleErrorResponse(error))
    }

    handleTodoListBtn(id){
        this.props.history.push(`/todos/`)
    }

    handleSuccesfullResponse(response) {
        this.setState({servicemessage: response.data.message})
    }

    handleErrorResponse(error){

        console.log(error.response)

        let errorMessage = '';
        if(error.message) errorMessage += error.message
        if(error.response && error.response.data) errorMessage += error.response.data.message;
        this.setState({servicemessage: errorMessage})

    }
}

export default WelcomeComponent