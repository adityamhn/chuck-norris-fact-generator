import React from 'react';
import Joke from './Joke';
import './Layout.css';
import image from './image.png';
import giphy from './giphy.gif';

const Layout = () => {
	return (<div>
		<h2 className="tc f1">CHUCK NORRIS</h2>
		<img className="image" src={image} />
		<Joke />
		</div>)
}

export default Layout;


		// <div className="tc f1">
		// <img src={image} className="w-25 bottom-0 image"/> 
		// <h1 className=''>CHUCK NORRIS</h1>
		// </div>