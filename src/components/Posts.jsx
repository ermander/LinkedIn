import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import {BsThreeDots} from 'react-icons/bs'
import {AiTwotoneLike} from 'react-icons/ai'
import {IconContext} from 'react-icons'
import {MdComment} from 'react-icons/md'
import {FaShare} from 'react-icons/fa'

export class Posts extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Container fluid style={{border : '2px solid grey',minHeight:'600px'}} className='mt-3' >
            <div id='postHeader'>
                <div>
                    <img src="" alt=""/>
                    <div>
                        <p>{this.props.name}</p>
                        <p style={{fontSize:'12px',color:'grey'}}>{this.props.bio}</p>
                    </div>
                </div>
                <div>
                    <BsThreeDots/>
                </div>
            </div>
            <div id='postBody'>
                <p>{this.props.text} Lorem ipsum dolor sit amet consectetur adipisicing elit. A temporibus eligendi quas officiis nesciunt blanditiis velit atque dolorem debitis cupiditate vitae aliquid rem, voluptates modi molestiae ipsam vel laboriosam deserunt.</p>
                <img className='img-fluid' src="https://images.unsplash.com/photo-1546507257-0bddab98fe3c?ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
            </div>
            <div id='postFooter'>
                <div style={{display:'flex',padding:'10px',fontSize:'12px'}}>
                    <IconContext.Provider value={{padding:'10px',color:'#007EC2'}}>
                    <p><AiTwotoneLike/></p>
                    </IconContext.Provider>
                    <p style={{padding: '2px 10px 0 5px'}}>21 .</p>
                    <p style={{padding : '2px 0'}}>1 Comment</p>
                </div>
                <hr style={{padding:'0',margin:'0'}}></hr>
                <div >
                    <div style={{display:'flex'}}>
                        <IconContext.Provider value={{}}>
                            <p><AiTwotoneLike/></p>
                        </IconContext.Provider>
                        <p>Like</p>
                    </div>
                    <div style={{display:'flex'}}>
                        <IconContext.Provider value={{}}>
                            <p><MdComment/></p>
                        </IconContext.Provider>
                        <p>Comment</p>
                    </div>
                    <div style={{display:'flex'}}>
                        <IconContext.Provider value={{}}>
                            <p><FaShare/></p>
                        </IconContext.Provider>
                        <p>Share</p>
                    </div>
                </div>
            </div>
            </Container>
        )
    }
}

export default Posts
