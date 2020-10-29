import { Avatar, Button, FormControl, Input, InputLabel, Paper, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import styles from './styles/RegisterStyles';
import "./Register.css";

function Register(props) {
    const { classes } = props;
    return (
        <div className="register">
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AssignmentIndIcon />
                    </Avatar>
                    <Typography variant="h5">Registration</Typography>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input type="text" name="username" spellCheck="false" autoFocus></Input>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input type="email" name="email" spellCheck="false" autoFocus></Input>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="passwd1">Password</InputLabel>
                            <Input type="password" name="passwd1" spellCheck="false" autoFocus></Input>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="passwd2">Confirm Password</InputLabel>
                            <Input type="password" name="passwd2" spellCheck="false" autoFocus></Input>
                        </FormControl>
                        <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit}>Register</Button>
                    </form>
                </Paper>
            </main>
        </div>
    )
}

export default withStyles(styles)(Register);
