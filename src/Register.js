import { Avatar, Button, FormControl, FormControlLabel, FormLabel, Input, InputLabel, Paper, Radio, RadioGroup, TextField, Typography, withStyles } from '@material-ui/core';
import React, {useState,useEffect} from 'react';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import styles from './styles/RegisterStyles';
import "./Register.css";
import { useStateValue } from './StateProvider';
import Axios from 'axios';

function Register(props) {
    
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [passwd1, setPass1] = useState("");
    const [passwd2, setPass2] = useState("");
    const [license, setLicense] = useState("");
    const [dob, setDob] = useState("");
    const [{user}, dispatch] = useStateValue()
    const { classes } = props;
    
    const add = async () => {
        const object = {
            username:username,
            phone:phone,
            gender:gender,
            email:email,
            pass1:passwd1,
            pass2:passwd2,
            license:license,
            dob:dob,
            user:user, 
        };
        console.log(object);
        await Axios.post('http://localhost:3001/register', { object: object }).then((response) => {
            alert("student added");
            setUsername("");
            setPhone("");
            setGender("");
            setEmail("");
            setPass1("");
            setPass2("");
            setLicense("");
            setDob("");
        });
    }
    
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
                            <InputLabel htmlFor="username" style={{ color: 'black' }}>Full Name</InputLabel>
                            <Input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} spellCheck="false" autoFocus></Input>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="phone" style={{ color: 'black' }}>Phone No.</InputLabel>
                            <Input type="text" name="phone" spellCheck="false" value={phone} onChange={(e) => setPhone(e.target.value) } autoFocus></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel className={classes.radio} component="legend" style={{ color: 'black' }}>Gender *</FormLabel>
                            <RadioGroup className="radio__group" aria-label="gender" required name="gender1" >
                                <div className="radio__div">
                                    <FormControlLabel className="male" value={gender} name="female" onChange={e => setGender(e.target.name)} control={<Radio />} label="Female"  />
                                    <FormControlLabel className="female" value={gender} name="male" onChange={e => setGender(e.target.name)} control={<Radio />} label="Male"  />
                                    <FormControlLabel className="other" value={gender} name="other" onChange={e => setGender(e.target.name)} control={<Radio />} label="Other" />
                                </div>
                            </RadioGroup>
                        </FormControl>
                        <FormControl className={classes.container} style={{color: 'black'}}>
                            <FormLabel className={classes.dob} component="legend" style={{color: 'black'}}>DOB *</FormLabel>
                            <TextField
                                id="date"
                                type="date"
                                defaultValue=""
                                className={classes.textField}
                                value={dob} onChange={e => setDob(e.target.value)}
                                InputLabelProps={{
                                shrink: true,     
                                }}
                            />  
                         </FormControl>
                        <FormControl className={classes.email} margin="normal" required fullWidth>
                            <InputLabel htmlFor="email" style={{ color: 'black' }}>Email</InputLabel>
                            <Input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} spellCheck="false" autoFocus></Input>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="passwd1" style={{ color: 'black' }}>Password</InputLabel>
                            <Input type="password" name="passwd1" value={passwd1} onChange={e => setPass1(e.target.value)} spellCheck="false" autoFocus></Input>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="passwd2" style={{ color: 'black' }}>Confirm Password</InputLabel>
                            <Input type="password" name="passwd2" value={passwd2} onChange={e => setPass2(e.target.value)} spellCheck="false" autoFocus></Input>
                        </FormControl>
                        {user === "doctor" && <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="passwd3" style={{ color: 'black' }}>Licence ID</InputLabel>
                            <Input type="text" name="licence"  value={license} onChange={e => setLicense(e.target.value)} spellCheck="false" autoFocus></Input>
                        </FormControl>}
                        <Button variant="contained" type="submit" onClick={add} fullWidth color="primary" className={classes.submit} >Register</Button>
                    </form>
                </Paper>
            </main>
        </div>
    );
}

export default withStyles(styles)(Register);
