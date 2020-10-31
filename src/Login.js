import React,{useState} from 'react';
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
import { MenuItem, Select } from '@material-ui/core';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login(props) {
    const [{user}, disapatch] = useStateValue();
    const history = useHistory();

    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [data, setData] = useState();

    const add = async () => {
        const object = {
            email:email,
            pass:pass,
        };
        console.log(object);
        await Axios.post('http://localhost:3001/login', { object: object }).then((response) => {
            alert("Yooooooo")
            setEmail("");
            setPass("");
            window.location('/')
            
        });

        await Axios.get('http://localhost:3001/login').then((res) => {
            alert("BAblue");
            setData(res.data);
            
        })
    }

    console.log(data)

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
                        <Input name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoFocus spellCheck="false"></Input>
                    </FormControl>
                    <FormControl margin="password" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input  type="password" name="password" id="password" value={pass} onChange={(e) => setPass(e.target.value)} autoFocus></Input>
                    </FormControl>
                    <FormControlLabel className={classes.remember}variant="h5" label="Remember Me" control={<Checkbox color="primary" />}/>
                    <Button onClick={add} variant="contained" type="submit" fullWidth color="primary" className={classes.submit}>SIGN IN</Button>
                </form>
            </Paper>
       </main>
    </div>
    )
}

export default withStyles(styles)(Login);
