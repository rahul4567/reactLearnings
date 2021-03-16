import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, useStore } from 'react-redux';
import styled from "@emotion/styled";

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

import getAuthors from "../services/getAuthors";
import getPosts from "../services/getPosts";
import { setAuthors, setPosts } from "../redux/actions";
import PostsCard from './PostsCard';

//import getRoutes from "../services/getRoutes";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



const Home = ({ authors, posts }) => {
  /*
  const [alerts, setAlerts] = useState([]);
  const [stops, setStops] = useState([]);
  const [currentId, setCurrentId] = useState([]);*/
  console.log(posts);
  const dispatch = useDispatch();

  useEffect(() => {
    getAuthors().then(data => {
      dispatch(setAuthors(data));
    });
  }, []);

  const classes = useStyles();
  const [author, setAuthor] = React.useState('');
  const [count, setCount] = React.useState('');

  const handleChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleCountChange = (event) => {
    setCount(event.target.value);
  };


  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormControl variant="outlined" className={`${classes.formControl} form-control-container`}>
            <InputLabel id="demo-simple-select-outlined-label">Author</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={author}
              onChange={handleChange}
              label="Author"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {authors.map(author => (
                <MenuItem value={author.id} key={author.id}>{author.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="outlined" className={`${classes.formControl} form-control-container`}>
            <InputLabel id="demo-simple-select-outlined-label">Count</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={count}
              onChange={handleCountChange}
              label="Count"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <PostsCard
        posts={posts}
        itemsPerPageCount={count}
        author={author}
        />
    </div>
  );
};

export default Home;
