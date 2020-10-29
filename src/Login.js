import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import "./Login.css";

function Login(props) {
    const { classes } = props;
    return (
        <div className="login">
            <main className={classes.main} >
            <Paper className={classes.paper}>
                <Avatar className={ classes.avatar }>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">Log In As patient</Typography>
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
                    <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit }>Log In</Button>
                </form>
            </Paper>
       </main>
    </div>
    )
}

export default withStyles(styles)(Login);
