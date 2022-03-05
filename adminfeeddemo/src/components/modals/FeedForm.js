import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './FeedForm.css'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));


const FeedForm = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [feedId, setFeedId] = useState('');
  const [feedName, setFeedName] = useState('');
  const [classification, setClassification] = useState('');
  const [feedNumber, setFeedNumber] = useState('');
  const [newFeedName,setNewFeedName] = useState('');
  const [addForm, setNewForm] = useState();

  const handleSubmit = e => {
    e.preventDefault();
  };

  const addNewForm = () =>{
       setNewForm(true);
  }

  const onClose = () => {
      setNewForm(false);
  }

  const onAdd = () => {
      setNewForm(false);
  }
  

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Feed Id"
        variant="filled"
        required
        value={feedId}
        onChange={e => setFeedId(e.target.value)}
      />
       <FormControl className="form" variant="filled" >
        <InputLabel id="demo-simple-select-filled-label">Feed Name</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
         
        >        
          <MenuItem value={10}>Feed one</MenuItem>
          <MenuItem value={20}>Feed Two</MenuItem>
          <MenuItem value={30}>Feed Three</MenuItem>
        </Select>
        
      </FormControl>
      <FormControl className="form" variant="filled" >
        <InputLabel id="demo-simple-select-filled-label">Classification</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
         
        >        
          <MenuItem value={10}>Feed one</MenuItem>
          <MenuItem value={20}>Feed Two</MenuItem>
          <MenuItem value={30}>Feed Three</MenuItem>
        </Select>
        
      </FormControl>
      <TextField
        label="Feed Number"
        variant="filled"
        required
        value={feedNumber}
        onChange={e => setFeedNumber(e.target.value)}
      />
      <div>
      <Dialog
        open={addForm}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      > 
      <DialogContent>
      <TextField
            autoFocus
            margin="dense"
            id="name"
            label="add"       
            fullWidth
            variant="standard"
          />
      </DialogContent>
      <DialogActions>
          <div className="addNewForm" >
        <Button className="addNewForm" variant="contained" onClick={onClose} >
          Close
        </Button>
        <Button className="addNewForm" type="submit" variant="contained" color="primary" onClick={onAdd}>
          Add
        </Button>
        </div>
        </DialogActions>   
        </Dialog>
      </div>
      
      <div>
        <Button variant="contained" color="primary" onClick={addNewForm}>
          Add Classification
        </Button>
        <Button type="submit" variant="contained" color="primary" onClick={addNewForm}>
          Add  Feed Name
        </Button>
      </div>
    </form>
  );
};

export default FeedForm;