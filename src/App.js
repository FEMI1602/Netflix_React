


import './App.css';
import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import {originals,action,comedy, horror, romance, trending, documentaries} from './urls'
import RowTitle from './Components/Rowpost/RowTitle';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Rowpost url={originals} title='Netflix Originals' />
     <Rowpost url={trending} title='Trending' isSmall />
     {/* <RowTitle url={trending} /> */}
     <Rowpost url={action} title='Action Movies' isSmall />
     <Rowpost url={comedy} title='Comedy Movies' isSmall />
     <Rowpost url={horror} title='Horror Movies' isSmall />
     <Rowpost url={romance} title='Romance Movies' isSmall />
    
    </div>
  );
}

export default App;
