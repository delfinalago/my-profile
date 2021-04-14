import logo from './logo.svg';
import './App.css';

import delfiProfile from './img/delfiProfile.png'

function App() {
  return (
    <div className="App">
      <h1>My profile deployed!</h1>
        <h2>I can't believe is working</h2>
        <img src={delfiProfile} alt="profile-imagen" />
    </div>
  );
}

export default App;
