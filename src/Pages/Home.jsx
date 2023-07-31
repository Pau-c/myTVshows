import React from 'react';
import SearchComponent from '../Components/Search/SearchComponent';
import ShowSeries from '../Components/FetchAllShows/FetchShows';

import  Navbar  from '../Components/NavBar';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <SearchComponent />
     
      <ShowSeries />
    
    </div>
  );
};
export default Home;