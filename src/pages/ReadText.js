import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as firebase from 'firebase/app';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { useAuth } from 'src/context/auth';

function ReadText() {
  const { currentUser } = useAuth();
  const { textId } = useParams();
  const [text, setText] = useState([]);
  useEffect(() => {
    const textRef = firebase
      .database()
      .ref(`texts/${currentUser.uid}/${textId}`);
    textRef.on('value', (snapshot) => {
      setText(snapshot.val());
    });
    return () => textRef.off('value');
  }, [currentUser, textId]);
  if (!text) {
    return 'Loading...';
  }
  return (
    <Paper style={{ whiteSpace: 'pre-line' }}>
      {text.title}
      <Divider />
      {text.text}
    </Paper>
  );
}

export default ReadText;
