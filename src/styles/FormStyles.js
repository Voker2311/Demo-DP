const { Autorenew } = require("@material-ui/icons");

const styles = theme => ({
    main:{
        width:"100%",
        display:"block",
        marginLeft:theme.spacing.unit,
        marginRight:theme.spacing.unit,
        [theme.breakpoints.up("sm")]:{
            width:400,
            marginLeft:"auto",
            marginRight:"auto"
        },
        
    },
    paper:{
        marginTop:theme.spacing.unit * 9,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px` 
    },
    avatar:{
        margin:theme.spacing.unit,
        backgroundColor:"#dc004e"
    },
    form:{
        width:"100%",
        marginTop:theme.spacing.unit * 3,
        padding:theme.spacing.unit
    },
    submit:{
        marginTop:theme.spacing.unit * 3,
        backgroundColor:"#f57c00",
        fontWeight:"700",
    },
    submit1:{
        marginTop:theme.spacing.unit * 3,
        backgroundColor:"#4791db"
    },
    remember:{
        marginTop:theme.spacing.unit,
        fontSize:"18px",
    },
    select:{
        marginTop:theme.spacing.unit * 5
    }
})

export default styles;