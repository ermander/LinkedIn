import React from 'react';
import { Col ,Image } from 'react-bootstrap';
import { FaQuestionCircle } from "react-icons/fa";
import PageViewer from './PageViewer';

class SideBar extends React.Component {

    state={
        data :[]
      }
      componentDidMount =async()=>{
        let response = await fetch(`https://striveschool.herokuapp.com/api/profile/`,{
          method :'GET',
          headers : new Headers({
            'Authorization': 'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU=',
            'Content-type': "application/json"
          })
        })
        let parsedJson = await response.json()
        this.setState({data : parsedJson})
      }

    render() {
        console.log(this.state.data.slice(0,6))
        return(
            <Col className='col-4 sideBar'>
                <div className='mb-3'>
                    <div className='d-flex justify-content-start align-items-center'>
                        <span>Edit public profile & URL</span><FaQuestionCircle />
                    </div>
                    <hr className='my-4'/>
                    <div className='d-flex justify-content-start align-items-center'>
                        <span>Add profile in another language</span><FaQuestionCircle />
                    </div>
                </div>
                <div className='banerContainer'>
                    <Image src='data:image/png;base64,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' style={{width: 100 + "%", height: 200 + "px"}}/>
                </div>
                <div className='mt-4'>
                    <h2>People Also Viewed</h2>
                    <ul>
                        {this.state.data.slice(20,26).map(function(data , i){
                            return <PageViewer data={data} key={i}/>
                           
                        })}
                    </ul>
                </div>
            </Col>
        )
    }
}

export default SideBar;