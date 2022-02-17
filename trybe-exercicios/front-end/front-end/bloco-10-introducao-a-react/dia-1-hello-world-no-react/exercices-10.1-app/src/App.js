import './App.css';
import Header from './Header';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const tasks = ['Acordar', 'Tomar banho', 'Tomar café', 'Escovar os dentes', 'Estudar'];
  return (
    Task(tasks.map(task => Task(task)))
  );
}

export default App;