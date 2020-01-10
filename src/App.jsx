import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL);
      const data = await response.json();
      // console.log(data);

      return data;
    }

    const data = fetchData();
    setPeople([
      ...people,
      ...data
    ]);
  }, []);

  return (
    <div className="App">
      <h1>Person App.</h1>
      <h3>All People</h3>
      {/* {console.log(people)} */}
      {people !== [] ? people.map((person) => {
        return (
          <div key={person.name}>
            <h4>{person.name}</h4>
            <p>{person.age} years old, location: ${person.location}</p>
          </div>
        )
      }) : null }
    </div>
  );
};

export default App;