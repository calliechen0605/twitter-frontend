import { useState } from 'react';
import './index.css';

const Login = () => {
  const [name, setName] = useState('')
  const [pwd, setPwd] = useState('')


  const clickHandler = () => {
    alert('Login Succesful' + name + ',' +pwd);

  }


  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  }

  const onChangePwHandler = (e) => {
    setPwd(e.target.value);

  }

  return (
    <div className="login">
        <div>Username:<input onChange={onChangeNameHandler}/></div>
        <div>Password:<input type="password" onChange={onChangePwHandler}/></div>
        <div><button onClick={clickHandler}>login</button></div>

    </div>
  );
}

export default Login;
