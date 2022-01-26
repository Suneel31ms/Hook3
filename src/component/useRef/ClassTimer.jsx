import React, { Component } from 'react';

class ClassTimer extends Component {
    interval
    constructor(props) {
      super(props)
    
      this.state = {
         timer:0
      }
    }
    
    componentDidMount(){
       this.interval =  setInterval(() => {
           this.setState(prevSate =>({timer: prevSate.timer + 1}))
        },1000)
    }
    // componentWillUnmount(){
    //     console.log('unmount');
    //     clearInterval(this.interval)
    // }
  render() {
    return (
        <div>
            class Timer - {this.state.timer}
            <button onClick={()=>clearInterval(this.interval)}>Clear Timer</button>
        </div>
    );
  }
}

export default ClassTimer;
