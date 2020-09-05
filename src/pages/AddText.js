import React from 'react';
import { useForm } from 'react-hook-form';
import * as firebase from 'firebase/app';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { useAuth } from 'src/context/auth';
import { showError, showSuccess } from 'src/utils/helpers';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function AddText(props) {
  const { currentUser } = useAuth();
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const sendDataToServer = (data) => {
    const database = firebase.database();
    const textsRef = database.ref(`texts/${currentUser.uid}`);
    const newTextKey = textsRef.push().key;
    textsRef
      .child(newTextKey)
      .set(data)
      .then(showSuccess)
      .catch((e) => showError(e.message || e));
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit(sendDataToServer)}>
      <TextField
        variant="outlined"
        name="title"
        label="Title"
        inputRef={register}
        fullWidth
      />
      <TextField
        variant="outlined"
        multiline
        name="text"
        label="Text"
        inputRef={register}
        className={classes.textField}
        fullWidth
        rows={15}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        type="submit"
      >
        Save
      </Button>
    </form>
  );
}

export default AddText;
