import React from 'react';
import fetchData from './services'
import tracker from './tracker'

export default class Button extends React.Component{
  state = {
    buttonName:'buttonDefaultName',
    data:{}, // 服务端数据
  }
  constructor(props){
    super(props)
    tracker.page('button init')
  }
  componentWillMount(){
    this.timer = setTimeout(() =>{
      this.setState({
        buttonName:'buttonAfter3seconds'
      })
    },3000)
  }
  async componentDidMount(){
    const res = await fetchData()
    this.setState({data:res})
  }
  onButtonClick = () =>{
    this.props.onButtonClick && this.props.onButtonClick()
  }
  render(){
    const {buttonName} = this.state
    return <div>
      <div className="button" onClick={this.onButtonClick}>{this.props.buttonName || buttonName}</div> 
    </div>
    
  }
}