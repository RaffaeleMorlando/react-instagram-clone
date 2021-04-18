import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react';
import Header from './components/Header'
import Main from './components/Main';


function App() {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios
      .get('https://flynn.boolean.careers/exercises/api/boolgram/profiles')
      .then(response => {
        setStories(response.data);
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <Main stories={stories} />
    </div>
  );

}

export default App;
