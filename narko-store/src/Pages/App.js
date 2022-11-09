import '../Assets/css/App.css';
import Header from '../Components/Header'
import Slider from '../Components/Slider'

const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className='section'>
        <Slider/>
      </div>
    </div>
  );
}

export default App;
