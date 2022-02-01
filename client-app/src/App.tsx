import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  //State Hook
  const [activities, setActivities] = useState([]);

  //Use effect Hook
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(response => {
        console.log(response);
        setActivities(response.data);
      })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>
        
        <List>
          {activities.map((acitivity: any) => (
              <List.Item key={acitivity.id}>{acitivity.title}</List.Item>
          ))}
        </List>

    </div>
  );
}

export default App;
