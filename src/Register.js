import { Avatar, Button, FormControl, FormControlLabel, FormLabel, Input, InputLabel, Paper, Radio, RadioGroup, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import styles from './styles/RegisterStyles';
import "./Register.css";
import { useStateValue } from './StateProvider';

// Doctor Registration
// Email
// Phone number
// Name
// Gender
// Registration Number


function Register(props) {
    const [{user}, dispatch] = useStateValue()

    const { classes } = props;
    return (
        <div className="register">
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AssignmentIndIcon />
                    </Avatar>
                    <Typography variant="h5">Register as {user}</Typography>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="username" style={{color: 'black'}}>Full Name</InputLabel>
                            <Input type="text" name="username" spellCheck="false" autoFocus></Input>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="phone" style={{color: 'black'}}>Phone No.</InputLabel>
                            <Input type="text" name="phone" spellCheck="false" autoFocus></Input>
                        </FormControl>
                        <FormControl>
                        <FormLabel className={classes.radio} component="legend" style={{color: 'black'}}>Gender *</FormLabel>
                        <RadioGroup className="radio__group" aria-label="gender" required name="gender1" >
                            <div className="radio__div">
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />    
                            </div>
                        </RadioGroup>
                        </FormControl>
                        
                        <FormControl className={classes.email} margin="normal" required fullWidth>
                            <InputLabel htmlFor="email" style={{color: 'black'}}>Email</InputLabel>
                            <Input type="email" name="email" spellCheck="false" autoFocus></Input>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="passwd1" style={{color: 'black'}}>Password</InputLabel>
                            <Input type="password" name="passwd1" spellCheck="false" autoFocus></Input>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="passwd2" style={{color: 'black'}}>Confirm Password</InputLabel>
                            <Input type="password" name="passwd2" spellCheck="false" autoFocus></Input>
                        </FormControl>
                        {user === "doctor" && <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="passwd3" style={{color: 'black'}}>Licence ID</InputLabel>
                            <Input type="text" name="passwd3" spellCheck="false" autoFocus></Input>
                        </FormControl>}
                        <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit}>Register</Button>
                    </form>
                </Paper>
            </main>
        </div>
    )
}

export default withStyles(styles)(Register);
