import React, {Component} from 'react'
import moment from 'moment'
import { Formik, Form, Field } from 'formik'

class TodoComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description:  'Learn javascript now',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
    }

     render(){
         let description = this.state.description
         let targetDate = this.state.targetDate

         return (
             <div>
                 <h1>Todo</h1>
                 <div className="container">
                    <Formik
                        initialValues = {{
                            description: description,
                            targetDate: targetDate
                        }}
                    >
                         {
                             (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name ="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target date</label>
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save </button>
                                </Form>
                             )
                         }
                    </Formik>
                 </div>
            </div>
         )
     }
}

export default TodoComponent