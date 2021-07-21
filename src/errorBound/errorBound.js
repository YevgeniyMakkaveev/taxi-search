import React, {Component} from 'react'
import ErrorMsg from '../error'

export default class ErrorBoundry extends Component{
state ={
 error: false
}

componentDidCatch(){
 this.setState({error: true})
}

render(){
 if(this.state.error){
 return <ErrorMsg/>} return this.props.children
}


}