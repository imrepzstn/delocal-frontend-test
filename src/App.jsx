import './App.css';
import React, {Component} from "react";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount (){
    fetch('http://www.colourlovers.com/api/palettes/new?format=json&numResults=10&resultOffset=0')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
      console.log(json);
    })
  }
 

  render() { 
    return <div></div>
   }

    
}
 
export default App;
