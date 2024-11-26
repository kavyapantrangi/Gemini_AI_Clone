
import React from 'react';
import Sidebar from './components/sideBar/Sidebar.jsx';
import Main from './components/Main/Main';


const App = () => {
  return (
    <div className='app-layout'>
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
