import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  /* first question */
  function getPeaksAndValleysIndexes(landscape) {
  let index =0, prev, current, next, max = landscape.length -1, peaksAndValleys = [];
  while (index < max) {
    let prevIndex = index - 1;
    if (prevIndex < 0) {
      peaksAndValleys[index] = '*';
      index++;
      continue;
    }
    prev = landscape[prevIndex];
    // increment index proceed until there is a change to account for multiples
    while ((index < max) && (landscape[index] === landscape[index +1])) {
      index++;
    }
    if (index >= max) {
      peaksAndValleys[index] = '*';
      break;
    }

    current = landscape[index];
    next = landscape[index + 1];
    if (prev !== landscape[prevIndex]){
      prev = landscape[prevIndex];
    }
    if ((current < prev) && (current < next)) {
      // valley
      peaksAndValleys[index] = 'v';
      index++;
      continue;
    }
    if ((current > prev) && (current > next)) {
      // peak
      peaksAndValleys[index] = 'p';
      index++;
      continue;
    }
    index++;
  }
  return peaksAndValleys;
}

function printArrays(landscape, indexes) {
  landscape.forEach((item, index) => {
    console.log(`${indexes[index] || ' '}: ${item}`);
  })
}
let landScape = [6,1,4], //[2,6,6,6,3], //[9,9,9,7,7,2,7,3,3,3,3,6,6,6,5,5,7,12,12,12,3,3,3],
    indexes = getPeaksAndValleysIndexes(landScape);

printArrays(landScape, indexes);

/* 2nd question */
  const classes = useStyles();
  const [winnerTeamState, setWinnerTeamState] = useState('');
  const [numberOfBattelsState, setNumberOfBattelsState] = useState('');
  const [survivourAState, setSurvivourAState] = useState([]);
  const [survivourDState, setSurvivourDState] = useState([]);
  const [winnerDState, setWinnerDState] = useState([]);
  const [winnerAState, setWinnerAState] = useState([]);
  //const [currentPage, setCurrentPage] = useState('');
  let records = [
      {
        name: 'SoundWave',
        type: 'D',
        spec : [8,9,2,6,7,5,6,10]
      },
      {
        name: 'Bluestreak',
        type: 'A',
        spec : [6,6,7,9,5,2,9,7]
      },
      {
        name: 'Hubcap',
        type: 'A',
        spec : [4,4,4,4,4,4,4,4]
        ///////////[str, intel, speed, endurance, rank, courage, firepower, skill]
        ////over all rating 0+1+2+3+6
      }
  ],
  autoboats = records.filter(record => record.type === 'A'),
  decepticons = records.filter(record => record.type === 'D'),
  numberOfBattles = autoboats.length < decepticons.length ? autoboats.length : decepticons.length,
  isPrimeOrPredaking = false,
  eleminatedFigterA = [],
  eleminatedFigterAObj = {},
  eleminatedFigterD = [],
  eleminatedFigterDObj = {},
  survivourA = [],
  survivourD = [];

  autoboats = autoboats.map(autoboat => {
    let strengthVal = autoboat.spec;
    autoboat.strength = strengthVal[0];
    autoboat.intelligence = strengthVal[1];
    autoboat.speed = strengthVal[2];
    autoboat.endurance = strengthVal[3];
    autoboat.rank = strengthVal[4];
    autoboat.courage = strengthVal[5];
    autoboat.firepower = strengthVal[6];
    autoboat.skill = strengthVal[7];
    autoboat.overallRating = strengthVal[0] + strengthVal[1] + strengthVal[2] + strengthVal[3] + strengthVal[6];
    if (autoboat.name === 'Optimus Prime' || autoboat.name === 'Predaking') {
      isPrimeOrPredaking = true;
    }
    return autoboat;
  });
  decepticons = decepticons.map(decepticon => {
    let strengthVal = decepticon.spec;
    decepticon.strength = strengthVal[0];
    decepticon.intelligence = strengthVal[1];
    decepticon.speed = strengthVal[2];
    decepticon.endurance = strengthVal[3];
    decepticon.rank = strengthVal[4];
    decepticon.courage = strengthVal[5];
    decepticon.firepower = strengthVal[6];
    decepticon.skill = strengthVal[7];
    decepticon.overallRating = strengthVal[0] + strengthVal[1] + strengthVal[2] + strengthVal[3] + strengthVal[6];
    return decepticon;
  });
  records = [...autoboats, ...decepticons];
  useEffect(() => {

  setNumberOfBattelsState(numberOfBattles);
  //Sorted by rank
  autoboats = autoboats.sort((a,b) => (a.rank < b.rank) ? 1 : ((b.rank < a.rank) ? -1 : 0));
  decepticons = decepticons.sort((a,b) => (a.rank < b.rank) ? 1 : ((b.rank < a.rank) ? -1 : 0));
  //Set survivour
  let countingDiff = Math.abs(autoboats.length - decepticons.length);
if (isPrimeOrPredaking) {
  survivourD = decepticons;
  survivourA = [];
} else {
  if (autoboats.length > decepticons.length) {
    survivourA = autoboats.slice(Math.max(autoboats.length - countingDiff, 1));
  } else if (decepticons.length > autoboats.length) {
    survivourD = decepticons.slice(Math.max(decepticons.length - countingDiff, 1));
  }
}
  console.log(survivourA, survivourD)

  const getMatchResult = () => {
    let autoboatsVal = autoboats;
    let decepticonsVal = decepticons,
        winnerA = [],
        winnerD = [];
    if (isPrimeOrPredaking) {
      eleminatedFigterD = decepticons;
      winnerA = autoboats;
      winnerD = [];
    } else {
      autoboatsVal.forEach((aVal, index) => {
        if (index < decepticonsVal.length) {
          let dVal = decepticonsVal[index],
              strengthDiff = aVal.strength - dVal.strength,
              courageDiff = aVal.courage - dVal.courage,
              skillDiff = aVal.skill - dVal.skill;
            if (Math.abs(courageDiff) >= 4 && Math.abs(strengthDiff) >= 3) {
              if (strengthDiff > 0) {
                if (!eleminatedFigterDObj[dVal.name]) {
                  eleminatedFigterDObj[dVal.name] = dVal;
                  eleminatedFigterD.push(dVal.name);
                  winnerA.push(aVal);
                }
              } else {
                if (!eleminatedFigterAObj[aVal.name]) {
                  eleminatedFigterAObj[aVal.name] = aVal;
                  eleminatedFigterA.push(aVal.name);
                  winnerD.push(dVal);
                }
              }
            } else if (Math.abs(skillDiff) >= 3) {
              if (skillDiff > 0) {
                if (!eleminatedFigterDObj[dVal.name]) {
                  eleminatedFigterDObj[dVal.name] = dVal;
                  eleminatedFigterD.push(dVal.name);
                  winnerA.push(aVal);
                }
              } else {
                if (!eleminatedFigterAObj[aVal.name]) {
                  eleminatedFigterAObj[aVal.name] = aVal;
                  eleminatedFigterA.push(aVal.name);
                  winnerD.push(dVal);
                }
              }
            } else {
              if (aVal.overallRating > dVal.overallRating && !eleminatedFigterDObj[dVal.name]) {
                eleminatedFigterDObj[dVal.name] = dVal;
                eleminatedFigterD.push(dVal.name);
                winnerA.push(aVal);
              } else if (aVal.overallRating < dVal.overallRating && !eleminatedFigterAObj[aVal.name]){
                eleminatedFigterAObj[aVal.name] = aVal;
                eleminatedFigterA.push(aVal.name);
                winnerD.push(dVal);
              }
            }
        }
      });
    }

    console.log(eleminatedFigterA);
    console.log(eleminatedFigterD);
    console.log(winnerA);
    console.log(winnerD);
    setSurvivourAState(survivourA);
    setSurvivourDState(survivourD);
    setWinnerAState(winnerA);
    setWinnerDState(winnerD);
    if (eleminatedFigterA.length === eleminatedFigterD.length) {
      console.log('There is tie');
    } else if (eleminatedFigterA.length > eleminatedFigterD.length) {
      setWinnerTeamState('Decepticons');
      console.log('Winner is Decepticons');
    } else {
      setWinnerTeamState('Autobots');
    }

  };
  console.log(eleminatedFigterA);
  console.log(eleminatedFigterD);

  getMatchResult();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
            <Paper className={`${classes.paper} grid-header`}>
              <b>Fight Output</b>
              <div>{numberOfBattelsState} battle</div>
              <div>
                <b>Winning Team ({winnerTeamState}):</b>
                {(winnerDState.length > 0  || winnerAState.length > 0) && <span>
                  {winnerTeamState === 'Decepticons' && <Grid container spacing={1}>
                    {winnerDState.map(value => (
                      <Grid item xs={3} key={`${value.name}-winnerD`}>
                        <Paper className={classes.paper}>{value.name}</Paper>
                      </Grid>
                    ))}
                  </Grid>}
                  {winnerTeamState === 'Autobots' && <Grid container spacing={1}>
                    {winnerAState.map(value => (
                      <Grid item xs={3}  key={`${value.name}-winnerA`}>
                        <Paper className={classes.paper}>{value.name}</Paper>
                      </Grid>
                    ))}
                  </Grid>}
                </span>}
              </div>
              {
                survivourAState.length > 0 && <div><div><b>Survivours from the Team (Autobots) : </b></div>
              <div>{survivourAState.map(value => (
                <Grid item xs={3} key={`${value.name}-survivourA`}>
                  <Paper className={classes.paper}>{value.name}</Paper>
                </Grid>
              ))}</div></div>
              }
              {
                survivourDState.length > 0 && <div>
                  <div><b>Survivours from the Team (Decepticons) : </b></div>
                  <div>{survivourDState.map(value => (
                    <Grid item xs={3} key={`${value.name}-survivourD`}>
                      <Paper className={classes.paper}>{value.name}</Paper>
                    </Grid>
                  ))}</div></div>
              }
            </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <Paper className={`${classes.paper} grid-header`}><b>Autobots</b></Paper>
          <Grid container spacing={2}>
            {autoboats.map(autoboat => (
              <Grid item xs={12} key={`${autoboat.name} -autoboatsss`}>
                <Paper className={classes.paper}>
                  <div><b>Name :</b>{autoboat.name}</div>
                  <div><b>Strength :</b>{autoboat.strength}</div>
                  <div><b>Rank :</b>{autoboat.rank}</div>
                  <div><b>Intelligence :</b>{autoboat.intelligence}</div>
                  <div><b>Speed :</b>{autoboat.speed}</div>
                  <div><b>Courage :</b>{autoboat.courage}</div>
                  <div><b>Firepower :</b>{autoboat.firepower}</div>
                  <div><b>Skill :</b>{autoboat.skill}</div>
                  <div><b>Endurance :</b>{autoboat.endurance}</div>
                  <div><b>Overall Rating :</b>{autoboat.overallRating}</div>
                  <div><b>Spec :</b></div>
                  <div>
                      <Grid container spacing={2}>
                        {autoboat.spec.map(value => (
                          <Grid item xs={2} key={`${value}-${Math.random()}`}>
                            <Paper className={classes.paper}>{value}</Paper>
                          </Grid>
                        ))}
                      </Grid>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>VS</Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={`${classes.paper} grid-header`}><b>Decepticons</b></Paper>
            <Grid container spacing={2}>
              {decepticons.map(decepticon => (
                <Grid item xs={12} key={`${decepticon.name}-${Math.random()}`}>
                  <Paper className={classes.paper}>
                    <div><b>Name :</b>{decepticon.name}</div>
                    <div><b>Strength :</b>{decepticon.strength}</div>
                    <div><b>Rank :</b>{decepticon.rank}</div>
                    <div><b>Intelligence :</b>{decepticon.intelligence}</div>
                    <div><b>Speed :</b>{decepticon.speed}</div>
                    <div><b>Courage :</b>{decepticon.courage}</div>
                    <div><b>Firepower :</b>{decepticon.firepower}</div>
                    <div><b>Skill :</b>{decepticon.skill}</div>
                    <div><b>Endurance :</b>{decepticon.endurance}</div>
                    <div><b>Overall Rating :</b>{decepticon.overallRating}</div>
                    <div><b>Spec :</b></div>
                    <div>
                        <Grid container spacing={2}>
                          {decepticon.spec.map(value => (
                            <Grid item xs={2} key={`${value}-${Math.random()}`}>
                              <Paper className={classes.paper}>{value}</Paper>
                            </Grid>
                          ))}
                        </Grid>
                    </div>
                  </Paper>
                </Grid>
              ))}
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
