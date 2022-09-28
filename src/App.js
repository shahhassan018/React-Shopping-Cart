import {BrowserRouter as Router} from 'react-router-dom';
import ProductList from './containers/ProductList';
import './App.css';

const App = () => {
  return (
      <Router>
        <div className="container">
          <ProductList />
        </div>
     </Router>
  );
}

export default App;
