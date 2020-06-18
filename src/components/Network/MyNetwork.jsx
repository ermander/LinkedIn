import React from 'react';
import {Container , Row } from 'react-bootstrap';
import MyNetworkProfiles from './MyNetworkProfiles';

class MyNetwork extends React.Component {

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

    render(){
        return(
            <Container>
                <Row className="row-cols-4">
                        {this.state.data.map(function(data , i){
                            return <MyNetworkProfiles data={data} key={i}/>
                        })}
                </Row>
            </Container>
        )
    }
}

export default MyNetwork;