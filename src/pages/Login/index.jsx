import logo from '../../assets/logo.jpg';
import arrow from '../../assets/arrow.png';
import './style.css'
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';
import { useState } from 'react';



export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInWithEmailAndPassword, user, loading, error,] =
     useSignInWithEmailAndPassword(auth);



    function handleSignIn(e){
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if (loading){
        return <p>Carregando... </p>;

    }

    if (user){
        return console.log(user);
    }

  return (
    <div className="container">
      <header className="header">
        <img className='logo' src={logo} alt="Warzone" />
        <h3>Bem-vindo ao Call of Duty Warzone</h3>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="joaoteves@hotmail.com" onChange={e =>setEmail(e.target.value)} />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" placeholder="****************" onChange={e =>setPassword(e.target.value)} />
        </div>

        <a href="">Esqueceu sua senha!!</a>

        <button className="button" onClick={handleSignIn}>
          Logar <img src={arrow} alt="flecha" />
        </button>

        <div className="footer">
          <p>Não tem uma conta?</p>
          <Link to="/register">Criar conta!</Link>
        </div>
      </form>
    </div>
  )
}
