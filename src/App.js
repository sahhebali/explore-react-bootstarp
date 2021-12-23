

import { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import './App.css';
import News from './components/News/News';



function App() {
  const[news,setNews] = useState([]);
  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-11-22&sortBy=publishedAt&apiKey=894038b990aa495397ade83cd4178534')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  },[])
 
  return (
<div className="app">
{news.length===0 ?<Spinner animation="border" /> :
<Row xs={1} md={3} className="g-4">
 {
   news.map(nw => <News news={nw}></News>)
 }
</Row>}
</div>
  );
}
 
export default App;
