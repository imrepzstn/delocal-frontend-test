import './App.css';
import React, {Component} from "react";
import  ColourLoversCard from "./components/colourLoversCard";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount (){
    fetch('https://cors-anywhere.herokuapp.com/http://www.colourlovers.com/api/palettes/new?format=json&numResults=10&resultOffset=0')
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
   
    var {isLoaded, items} = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>;
    }else{
      console.log(items);
      return ( 
      <div className="App" >
        <div className='wrapper'>
          {items.map(item => (
         <ColourLoversCard key={item.id} ColourLoversCard={item} />

          ))}
        </div>
      </div> );
    }
   }

    
}
 
export default App;
