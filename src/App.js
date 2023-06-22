import './App.css';
import Navbar from './components/navbar/Navbar';
import AddEmployee from './components/AddEmployee';
import CurrentEmployees from './components/CurrentEmployees';
import Employee from './components/Employee';

  function App() {
   return (
   <div className="App">
    <Navbar />
    <AddEmployee />
    <CurrentEmployees />
   </div>
  );
}

export default App;

