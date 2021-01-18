import './App.css';
import React, { useCallback, useEffect, useState } from "react";
import  ColourLoversCard from "./components/colourLoversCard";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";

function App() {
  const numOfItems = 10;
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsFrom, setitemsFrom] = useState(0);

  

  useEffect(() => {
    axios
      .get(
        `https://my-cors-proxy.herokuapp.com/http://www.colourlovers.com/api/palettes/new?format=json&numResults=${numOfItems}&resultOffset=${itemsFrom}`
      )
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.data]);
        console.log(res.data)
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [itemsFrom]);


  const fetchItems = useCallback(() => {
    setIsLoading(true);
    setitemsFrom((itemsFrom) => itemsFrom + numOfItems);

  }, []);

   
return (
<div className="App">
        <InfiniteScroll
        className="wrapper"
        initialLoad ={isLoading}
        loadMore={fetchItems}
        useWindow={true}
        hasMore={!isLoading}
        threshold={800}
      >
         {items.map(item => (
         <ColourLoversCard key={item.id} ColourLoversCard={item} />

          ))}
      </InfiniteScroll>
      </div> 
      
);
    
}
 
export default App;
