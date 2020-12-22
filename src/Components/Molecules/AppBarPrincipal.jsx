import { AppBar, CssBaseline, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles=makeStyles((theme)=>({
    diseño:{
        background:'#141e30'
    }
}))
const AppBarPrincipal=(props)=>{
    const classes=useStyles()
    return(
        <>
        <CssBaseline/>
        <AppBar position='static' className={classes.diseño}>
            <Toolbar>
                <IconButton
                    color='inherit'
                    aria-label='menu'
                    edge='start'
                    onClick={props.OpenDrawer}
                >
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
        </>
    )
}
export default AppBarPrincipal