import { useState } from 'react';
import axios from 'axios';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const res = await axios.post('/api/users/login/', { username, password });
    localStorage.setItem('token', res.data.access);
    window.location.href = '/inventory';
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-96">
      <h2 className="text-xl mb-4">Login</h2>
      <input className="w-full mb-2 p-2 border" placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input className="w-full mb-4 p-2 border" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2 w-full" onClick={login}>Login</button>
    </div>
  );
}
