import React from 'react';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import './App.css';
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';

function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from bg-blue-700 to to-blue-800 h-fit shadow-xl shadow-gray-400'>
      <TopButton />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />
    </div>
  );
}

export default App;
