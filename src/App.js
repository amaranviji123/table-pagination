import React, { useState, useEffect } from "react";
import Page from "./components/Page";
import Posts from "./components/Posts";

const App = () => {
  const [post, setPost] = useState([]);
  const [initial, setInitial] = useState(1);
  const [page, setpage] = useState(10);
  const [len, setlen] = useState(0);
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          setlen(data.length);
          setPost(data)
    });
  },[]);
  const first = initial * page;
  const last = first - page;
  const perPage = post.slice(last, first);
  // console.log(first, last, perPage);

  const pageNum = (number) => {
    setInitial(number);
  };
  return (
    <div className="container">
      <h1>TABLE WITH PAGINATION (:</h1>
      <br />
      <Posts posts={perPage} />
      <Page pageNum={pageNum} len={len}/>
    </div>
  );
};
export default App;
