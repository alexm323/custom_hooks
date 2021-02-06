import MoodClicker from './MoodClicker';
import Counter from './Counter';
import ColorPicker from './ColorPicker'
import './App.css';
import SignupForm from './SignupForm';
import DogDetail from './DogDetail';

function App() {
  return (
    <div className="App">
      <DogDetail/>
      <SignupForm/>
      <MoodClicker/>
      <Counter/>
      {/* <ColorPicker/> */}
    </div>
  );
}

export default App;
