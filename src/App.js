import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados do GitHub:', error);
    }
  };

  return (
    <div>
      <h2>Projeto GITHUB</h2>
      <h1>GitHub API Consumer</h1>
      <label>
        Digite o nome de usuário do GitHub:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button onClick={fetchData}>Buscar</button>

      {userData && (
        <div>
          <h2>Dados do Usuário</h2>
          <img
            src={userData.avatar_url}  
            alt={`${userData.login}'s avatar`}
            style={{width:'100px', height:'100px', borderRadius:'50%'}}
          />
          <p>Nome: {userData.name}</p>
          <p>Seguidores: {userData.followers}</p>
          <p>Repositórios públicos: {userData.public_repos}</p>
          <p>Link para o perfil: <a href={userData.html_url} target="_blank" rel="noopener noreferrer">{userData.html_url}</a></p>
        </div>
      )}
    </div>
  );
}

export default App;

