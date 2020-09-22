import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase/app';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAuth } from 'src/context/auth';

function Texts() {
  const { currentUser } = useAuth();
  const [texts, setTexts] = useState([]);
  useEffect(() => {
    const textsRef = firebase.database().ref(`texts/${currentUser.uid}`);
    textsRef.on('value', (snapshot) => {
      const textsArr = [];
      snapshot.forEach((s) => {
        textsArr.push({ ...s.val(), id: s.key });
      });
      setTexts(textsArr);
    });
    return () => textsRef.off('value');
  }, [currentUser]);
  return (
    <List component="nav">
      {texts.map((t) => (
        <ListItem to={`/read-text/${t.id}`} component={Link} key={t.id} button>
          <ListItemText primary={t.title} secondary={'Progress 0%'} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default Texts;
