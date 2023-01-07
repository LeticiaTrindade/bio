import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import Pessoal from './Pessoal';
import Social from './Social';

function App() {
  return (
    <section className='container col-md-5'>
    <Profile/>
    <Pessoal/>
    <Social/>
    </section>
  );
}

export default App;
