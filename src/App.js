import './App.css';
import Body from './components/body';
import Header from './components/header';

function App() {
  return (
    <div className='responsa'>
      <Header prop={{color:'main',mobile:"mtavari"}}/>
      <Body />
    </div>
  );
}

export default App;
