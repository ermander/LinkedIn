import React, { Component } from 'react'
import {Container,Modal,Button} from 'react-bootstrap'
import {FiEdit,FiVideo} from 'react-icons/fi'
import {GrCamera} from 'react-icons/gr'
import {IconContext} from 'react-icons'
import {AiOutlineFileText} from 'react-icons/ai'
import Posts from './Posts'

export class Feed extends Component {
    state ={
        posts :[],
        show : false
    }
    componentDidMount = async()=>{
        let response = await fetch('https://striveschool.herokuapp.com/api/posts/',{
            method :'GET',
            headers : new Headers({
                'Authorization': 'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU=',
                'Content-type': "application/json"
              })
        })
        let posts = await response.json()
        this.setState({posts})
        console.log(this.state.posts)
    }
    handleShow =()=>{
        this.setState({show:true})
    }
    handleClose =()=>{
        this.setState({show:false})
    }
    
    render() {
        return (
            <Container fluid  >
                <div id='writePost' >
                    <div onClick={this.props.postButton}>
                        <IconContext.Provider value={{className:'writePostIcons'}}>
                            <a><FiEdit/></a>
                        </IconContext.Provider>
                        <a style={{fontSize:'20px',paddingTop:'20px'}}>Start a Post</a>
                    </div>
                    <div id='icons'>
                        <IconContext.Provider value={{className : "writePostIcons"}}>
                            <div><GrCamera/></div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className : "writePostIcons"}}>
                            <div><FiVideo/></div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className : "writePostIcons"}}>
                            <div><AiOutlineFileText/></div>
                        </IconContext.Provider>
                    </div>
                </div>
                <div id='writePostFooter'>
                    <p><a href="">Write an article</a> on LinkedIn</p>
                </div>
                <hr></hr>
                {this.state.posts.map(element =>{
                    return(
                        <Posts name={element.user.name} bio={element.user.bio} text={element.text}/>
                    )
                })}
            </Container>
        )
    }
}

export default Feed
