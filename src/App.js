import { useEffect, useState } from 'react';
import {Row, Spinner } from 'react-bootstrap';
import './App.css';
import News from './components/News/News';
import News2 from './components/News2/News2';



function App() {
  const[news,setNews] = useState([]);
  useEffect(()=>{
    fetch(' https://newsapi.org/v2/everything?q=bitcoin&apiKey=894038b990aa495397ade83cd4178534')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  },[])
 
  return (
<div className='app'>
  {
    news.length===0 ? <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner> : <Row xs={1} md={4} className="g-4">
  {
    news.map(nw => <News2 news={nw}></News2> )
  }
</Row>
  }

</div>
  );
}
 
export default App;
/* <div className="app">
{news.length===0 ? <Spinner animation="border" />:
<Row xs={1} md={3} className="g-4">
 {
   news.map(nw => <News news={nw}></News>)
 }
</Row>}
</div> */