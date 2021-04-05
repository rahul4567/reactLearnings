import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import NativeSelect from '@material-ui/core/NativeSelect';
import SettingsIcon from '@material-ui/icons/Settings';
import Icon from '@material-ui/core/Icon';
import { createMuiTheme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  formControl : {
    width : '100%',
    top: '-22px',
  },
  logoImage : {
    height: '100px',
    width: '100px',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(3),
    },
    borderRadius: '12px',
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    borderRadius: '12px',
    marginTop: '0px',
  },
  textField : {
    borderRadius : '12px',
  },
  signInTypo : {
    marginBottom : '20px',
    marginTop : '5px',
  },
  circularProgress : {
    width: '20px !important',
    height: '20px !important',
  }
}));

// 2nd question

let danger_point = 24;

function abs_sum(value){ // function to get abs sum
  value = Math.abs(value)
  let sum = 0;

  while (value) {
      sum += value % 10;
      value = Math.floor(value / 10);
  }
  return sum;
}

function is_safe(x, y){ // function to check if current point is safe
   return (abs_sum(x)+abs_sum(y) < danger_point)?true:false;
}
// We are simply visiting first quadrant only one by one point. this will check if the point is safe, it will simply add to the safe_points counter....
function findPoints(){
    let area = 1000;
    let total_points = 0, safe_points = 0;
    for(let y=0; y<=area; y++){ // Y-AXIS Loop
        for(let x=0; x<=area; x++){  // X-AXIS Loop
            if(is_safe(x,y)){
                safe_points++;
            }
            ++total_points;
        }
    }
    // As there are 4 quadrants, we will multiply the result by 4
    console.log(`total points = ${total_points*4}`)
    console.log(`safe points = ${safe_points*4}`)

}

findPoints();

function App() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const [isCircularProgressVisible, setIsCircularProgressVisible] = React.useState(false);
  const [language, setLanguage] = React.useState('');
  const [emailOrPhone, setEmailOrPhone] = React.useState('');
  const [emailErrorText, setEmailErrorText] = React.useState('');
  const [passwordErrorText, setPasswordErrorText] = React.useState('');
  const [passwordVal, setPasswordVal] = React.useState('');
  const [isValidEmailPhone, setIsValidEmailPhone] = React.useState(true);
  const [isValidPassword, setIsValidPassword] = React.useState(true);
  const regExPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  const regExEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const signInHandler = (event) => {
    let isValidEmailPhone;
    if (_.isEmpty(emailOrPhone)) {
      isValidEmailPhone = false;
      setIsValidEmailPhone(false);
      setEmailErrorText('Email or phone is a required filed.');
    } else {
      if (regExEmail.test(emailOrPhone) || regExPhone.test(emailOrPhone)) {
        isValidEmailPhone = true;
        setIsValidEmailPhone(true);
        setEmailErrorText('');
      } else {
        isValidEmailPhone = false;
        setIsValidEmailPhone(false);
        setEmailErrorText('Email or phone is not valid');
      }
    }
    let isPasswordValid = !_.isEmpty(passwordVal),
        passwordErrorText = isPasswordValid ? '' : 'Password is a required filed.';
    setIsValidPassword(isPasswordValid);
    setPasswordErrorText(passwordErrorText);
    if (isPasswordValid && isValidEmailPhone) {
      setIsCircularProgressVisible(true);
      setTimeout(function() {
        setIsCircularProgressVisible(false);
      },3000);

    }
  };

  const emailChangeHandler = (event) => {
    setEmailOrPhone(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPasswordVal(event.target.value);
  };

  return (
    <main className={classes.layout}>

      <Paper className={classes.paper}>
        <img className={`${classes.logoImage} App-logo`} src={logo} alt="logo" />
        <Typography component="h1" variant="h6" align="left" className={classes.signInTypo}>
          Sign In
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              error={!isValidEmailPhone}
              className={classes.textField}
              required
              id="email_phone"
              name="email_phone"
              label="Email or Phone"
              fullWidth
              variant="outlined"
              value={emailOrPhone}
              onChange={emailChangeHandler}
              helperText={emailErrorText}
              autoComplete="given-name"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              error={!isValidPassword}
              required
              type="password"
              id="password"
              name="password"
              label="Password"
              fullWidth
              variant="outlined"
              onChange={passwordChangeHandler}
              helperText={passwordErrorText}
              autoComplete="given-name"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6}>
            <Typography align="left">
              <Link href="#" onClick={preventDefault}>
                Forget Password?
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography align="right">
              {isCircularProgressVisible && <CircularProgress className={classes.circularProgress} />}
              <Button variant="contained" color="primary" className={classes.button} onClick={signInHandler}>
                Sign in
              </Button>
            </Typography>
          </Grid>
        </Grid>
        <div className="extra-margin"></div>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6}>
            <Typography align="left">
              <Link href="#" onClick={preventDefault}>
                Create an account
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6}>
            <Grid container spacing={3}>
              <Grid item xs={1} sm={1}>
                <SettingsIcon />
              </Grid>
              <Grid item xs={7} sm={7}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Select a language</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    onChange={handleChange}
                  >
                    <MenuItem value={'English'}>English</MenuItem>
                    <MenuItem value={'French'}>French</MenuItem>
                    <MenuItem value={'Spanish'}>Spanish</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Grid container spacing={1} justify="flex-end">
              <Grid item xs={4} sm={3}>
                <Typography className={classes.root}>
                  <Link href="#" onClick={preventDefault} color="inherit">
                      Help
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={4} sm={3}>
                <Typography className={classes.root}>
                  <Link href="#" onClick={preventDefault} color="inherit">
                      Privacy
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={4} sm={3}>
                <Typography className={classes.root}>
                  <Link href="#" onClick={preventDefault} color="inherit">
                      Term
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </main>
  );
}

export default App;
