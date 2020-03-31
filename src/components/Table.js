import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import "./SimpleTable.css";

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});



function createData(name, hole, one, two, three, four, five ) {
  return { name, hole, one, two, three, four, five };
}

const rows = [
  createData('Black'),
  createData('Blackhandicap'),
  createData('Blue'),
  createData('Bluehandicap'),
  createData('White'),
  createData('Whitehandicap'),
  createData('Combo'),
  createData('Combohandicap'),
  createData('Menshandicap'),
  createData('Menspar'),
  createData('Womenspar'),
  createData('Womenshandicap'),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer  class = "table" component={Paper}>
              <Typography  class = "typo" variant="h1" id="tableTitle">
          Scoreboard
        </Typography>

      <Table className={classes.table} aria-label="simple table">
        <TableHead className = {classes.root}>
          <TableRow class = "hole">
            <TableCell  >Hole</TableCell>
            <TableCell align="center">1</TableCell>
            <TableCell align="center">2</TableCell>
            <TableCell align="center">3</TableCell>
            <TableCell align="center">4</TableCell>
            <TableCell align="center">5</TableCell>
            <TableCell align="center">6</TableCell>
            <TableCell align="center">7</TableCell>
            <TableCell align="center">8</TableCell>
            <TableCell align="center">9</TableCell>
            <TableCell align="center">Out</TableCell>
            <TableCell align="center">10</TableCell>
            <TableCell align="center">11</TableCell>
            <TableCell align="center">12</TableCell>
            <TableCell align="center">13</TableCell>
            <TableCell align="center">14</TableCell>
            <TableCell align="center">15</TableCell>
            <TableCell align="center">16</TableCell>
            <TableCell align="center">17</TableCell>
            <TableCell align="center">18</TableCell>
            <TableCell align="center">In</TableCell>
            <TableCell align="center">Total </TableCell>
          </TableRow>
        </TableHead>


        <TableBody class = "blue">
        {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center" >
              <TextField id="standard-size-normal"  />
                </TableCell>
              <TableCell align="center">
              <TextField id="standard-size-normal"  />
                </TableCell>
              <TableCell align="center">
              <TextField id="standard-size-normal"  />
                </TableCell>
              <TableCell align="center">
              <TextField id="standard-size-normal"  />
                </TableCell>
              <TableCell align="center">
              <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>
                <TableCell align="center">
                <TextField id="standard-size-normal"  />
                </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
