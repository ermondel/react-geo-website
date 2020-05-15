import React from 'react';
import SidebarInfo from '../SidebarInfo/SidebarInfo';

const Home = () => (
  <main className='main'>
    <div className='sidebar'>
      <div className='sidebar-wrap'>
        <SidebarInfo
          top={true}
          list='React, Redux, Redux Thunk, React Hooks, React Context, JSONPlaceholder API, Geolocation API'
        />
      </div>
    </div>
    <div className='content'>
      <div className='content-wrap'>
        <h2>Platform</h2>
        <div className='main-info'>under construction...</div>
        <div className='sources'>
          <p className='sources__item'>
            Photo of the island by Ahmed Sharyaan on Unsplash.
          </p>
          <p className='sources__item'>
            Image of the compass by Bunzellisa on Pixabay.
          </p>
          <p className='sources__item'>Loading GIF from loading.io.</p>
          <p className='sources__item'>Book covers from Wikipedia.</p>
        </div>
      </div>
    </div>
  </main>
);

export default Home;
