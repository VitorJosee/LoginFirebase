import logo from '../../assets/logo.jpg';
import arrow from '../../assets/arrow.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './style.css'
import { Link } from 'react-router-dom';
import { auth } from '../../services/firebaseConfig';
import { useState } from 'react';


export function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [ createUserWithEmailAndPassword, user, loading, error, ] = 
     useCreateUserWithEmailAndPassword(auth);

    function handleSignOut(e){
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    if (loading){
        return <p>Carregando... </p>;

    }
  
  return (
    <div className="container">
      <header className="header">
        <img className='logo' src={logo} alt="Warzone" />
        <h3>Digite sua informações de cadastro</h3>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="joaoteves@hotmail.com" onChange={e =>setEmail(e.target.value)} />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" placeholder="****************"  onChange={e =>setPassword(e.target.value)}/>
        </div>


        <button className="button" onClick={handleSignOut}>
          Cadastrar <img src={arrow} alt="flecha" />
        </button>

        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/">Acesse sua conta!</Link>
        </div>
      </form>
    </div>
  )
}
