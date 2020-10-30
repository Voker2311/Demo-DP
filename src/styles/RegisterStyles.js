const styles = theme => ({
    main:{
        width:"100%",
        display:"block",
        marginLeft:theme.spacing.unit,
        marginRight:theme.spacing.unit,
        marginBottom:"75px",
        [theme.breakpoints.up("sm")]:{
            width:500,
            marginLeft:"auto",
            marginRight:"auto"
        },
    },
    paper:{
        marginTop:theme.spacing.unit * 9,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"20px"
    },
    avatar:{
        marginBottom:theme.spacing.unit,
        backgroundColor:"#dc004e",
    },
    form:{
        marginTop:theme.spacing.unit,
        padding:theme.spacing.unit, 
        
    },
    submit:{
        marginTop:theme.spacing.unit * 3,
        backgroundColor:"#dc004e",
        fontWeight:"700"
    },
    radio:{
        marginTop:theme.spacing.unit * 2,
    },
    email:{
        marginTop:"-10px"
    },
    textField: {
        marginRight: theme.spacing(1),
        width: 200,
        marginTop:theme.spacing(0.2),
        marginBottom:theme.spacing(2),
    },
    dob:{
        marginTop:theme.spacing(1),
    }
})


export default styles;