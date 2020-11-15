import React,{useState,useEffect} from 'react';
import axios from 'axios';
import oval from './oval.svg';
import './Joke.css';

const Joke = () => {
const [joke,setJoke] = useState("");
const [fetch,setFetch] = useState(false);
const [loading,setLoading] = useState(true);

useEffect(() => {
	    const fetchData = async () => {
	    	setLoading(true);
      const result = await axios(
        'https://api.chucknorris.io/jokes/random'
      )
      setJoke(`${result.data.value}`)
      setLoading(false)
    }
    fetchData()
  }, [fetch])


return (
	loading ? <div className="container"><div className="card">
  <p>Fact :</p><img className='loader'
          src={oval}
          alt="loader"
        />
        </div>
        <div className="btn-container">
	<button className="big-button" onClick={() =>setFetch(!fetch)}>Another One!</button>
        </div>
        </div> : <div className="container">
        <div className="card">
        <p>Fact :</p>
	<h2>{joke}</h2>
  </div>
  <div className="btn-container">
  	<button className="big-button" onClick={() =>setFetch(!fetch)}>Another One!</button>
	</div>
  </div>
	)
}

export default Joke;