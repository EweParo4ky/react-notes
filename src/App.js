import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './slices/index.js';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Edit } from './pages/Edit.js';
import { NavBar } from './components/NavBar';
import { Alert } from './components/Alert.jsx';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='container'>
          <NavBar />
          <Alert />
          <Routes>
            <Route path='/' exact Component={Home}></Route>
            <Route path='/about' Component={About}></Route>
            <Route path='/edit' Component={Edit}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
