import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div>
      <Header filters={filters} filter={filter} />
      <List filter={filter} />
    </div>
  );
}

export default App;
