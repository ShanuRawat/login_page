import logo from './logo.svg';
import './App.css';

function App() {
  return (
<>
<div className="wrapper">
  <form action="">
    <h1>Login</h1>
    <div className="input-box">
      <input type="text" placeholder='username' required /><i class='bx bx-user'></i>
    </div>
    <div className="input-box">
      <input type="password" placeholder='password'  required/><i class='bx bx-lock-alt'></i>
    </div>
    <div className="rember-forgot">
    <label><input type="checkbox"/> Rember me</label>
    <a href="">forgot Password</a>
    </div>
    <div className='btnnn'>
    <button type='submit' className='btn'>Log In</button>
    </div>
  </form>
</div>


</>

  );
}

export default App;
