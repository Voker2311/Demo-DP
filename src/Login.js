import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import "./Login.css";
import { useStateValue } from './StateProvider';

function Login(props) {
    const [{user}, disapatch] = useStateValue();

    const { classes } = props;
    return (
        <div className="login">
            <main className={classes.main} >
            <Paper className={classes.paper}>
                <Avatar className={ classes.avatar }>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">Sign In As patient</Typography>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input name="email" id="email" autoFocus spellCheck="false"></Input>
                    </FormControl>
                    <FormControl margin="password" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input  type="password" name="password" id="password" autoFocus></Input>
                    </FormControl>
                    <FormControlLabel className={classes.remember}variant="h5" label="Remember Me" control={<Checkbox color="primary" />}/>
                    <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit}>SIGN IN</Button>
                </form>
            </Paper>
       </main>
    </div>
    )
}

export default withStyles(styles)(Login);
