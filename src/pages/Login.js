import React, { useMemo, useCallback } from 'react';
import { Button } from '@material-ui/core';
import * as firebase from 'firebase/app';
import { useAuth } from 'src/context/auth';
import { showError } from 'src/utils/helpers';
import cn from './Login.module.scss';

function Login({ history }) {
  const { currentUser } = useAuth();
  if (currentUser) {
    history.replace('/');
  }
  const provider = useMemo(() => new firebase.auth.GoogleAuthProvider(), []);
  const login = useCallback(() => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => history.replace('/'))
      .catch((e) => showError(e.message || e));
  }, [history, provider]);
  return (
    <div>
      <Button onClick={login} className={cn.Button} color="primary">
        Login
      </Button>
    </div>
  );
}

export default Login;
