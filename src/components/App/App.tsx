import React, { useEffect } from 'react';
import './App.css';
import api from '../../utils/api';

function App() {

  useEffect(() => {
    api.getData()
      .then((res) => {
        console.log(res.data)
      })
  }, [])
  return (
    <div>
    </div>
  );
}

export default App;
