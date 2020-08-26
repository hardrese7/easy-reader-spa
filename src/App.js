import React, { useCallback, useMemo, useState } from 'react';
import { Button } from '@material-ui/core';
import * as firebase from 'firebase/app';
import cn from './App.module.scss';
import 'src/styles/global.scss';

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const provider = useMemo(() => new firebase.auth.GoogleAuthProvider(), []);
  const login = useCallback(() => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setToken(result.credential.accessToken);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error);
      });
  }, [provider]);
  const logout = useCallback(() => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setToken(null);
        setUser(null);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  return (
    <div>
      <Button onClick={login} className={cn.Button} color="primary">
        Login
      </Button>
      <Button onClick={logout} className={cn.Button} color="primary">
        Logout
      </Button>
      <br />
      Token:
      {JSON.stringify(token)}
      <br />
      User:
      {JSON.stringify(user)}
      <br />
      Error:
      {JSON.stringify(error)}
      <br />
    </div>
  );
}

export default App;
