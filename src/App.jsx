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
    fetch('https://cors-anywhere.herokuapp.com/http://www.colourlovers.com/api/palettes/new?format=json&numResults=20&resultOffset=0')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    })
  }


   handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
      console.log("hahóó"); 
      
    }


  }
 

  render() { 
// window.addEventListener('scroll', this.handleScroll);
   
    var {isLoaded, items} = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>;
    }else{
      window.addEventListener('scroll', this.handleScroll);
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
