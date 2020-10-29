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
    }
})


export default styles;