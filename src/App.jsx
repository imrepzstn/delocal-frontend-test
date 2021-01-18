import "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import ColourLoversCard from "./components/colourLoversCard";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";

function App() {
  //Number of items to be load
  const numOfItems = 10;
  //Items array to store the loaded items
  const [items, setItems] = useState([]);
  //isLoading to identify whenever the data is being loaded
  const [isLoading, setIsLoading] = useState(true);
  //itemsFrom to set the API asset properties
  const [itemsFrom, setitemsFrom] = useState(0);

  //Fetching data from api using Axios and cors anywhere proxy to fix Allow-origin CORS issue on localhost
  useEffect(() => {
    axios
      .get(
        `https://my-cors-proxy.herokuapp.com/http://www.colourlovers.com/api/palettes/new?format=json&numResults=${numOfItems}&resultOffset=${itemsFrom}`
      )
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.data]);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [itemsFrom]);

  //callback function to fetch more data from API with asset properties
  const fetchItems = useCallback(() => {
    setIsLoading(true);
    setitemsFrom((itemsFrom) => itemsFrom + numOfItems);
  }, []);

  //Rendering the cards using react-infinite-scroller component for loading more data by scrolling down
  return (
    <div className="App">
      <InfiniteScroll
        className="wrapper"
        initialLoad={isLoading}
        loadMore={fetchItems}
        useWindow={true}
        hasMore={!isLoading}
        threshold={1000}
      >
        {items.map((item) => (
          <ColourLoversCard key={item.id} ColourLoversCard={item} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default App;
