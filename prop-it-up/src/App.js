import Person from './components/Person';
import './App.css';

function App() {
  return (
  <div className="App">
    <Person 
    firstName={"Jane"} 
    lastName={"Doe"}
    age={"45"}
    hColor={"Black"}
    />
    <Person 
    firstName={"John"} 
    lastName={"Smith"}
    age={"88"}
    hColor={"Brown"}
    />
    <Person 
    firstName={"Millard"} 
    lastName={"Fillmore"}
    age={"50"}
    hColor={"Brown"}
    />
    <Person 
    firstName={"Maria"} 
    lastName={"Smith"}
    age={"62"}
    hColor={"Brown"}
    />
  </div>
  );
}

export default App;
