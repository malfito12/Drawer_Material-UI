import { 
    Table,
    TableCell, 
    TableBody, 
    TableContainer, 
    TableHead, 
    TableRow, 
    withStyles, 
    Paper,
    makeStyles} from '@material-ui/core'
import React from 'react'
import ViewUserTable from '../Atoms/ViewUserTable'

const useStyles=makeStyles({
    table:{
        minWidth: 370,
    }
})
const StyledTableCell=withStyles((theme)=>({
    head:{
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body:{
        fontSize: 14,
    }
}))(TableCell)
const TableUsers=(props)=>{
    const classes=useStyles()
    return(
        <>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Nombre</StyledTableCell>
                        <StyledTableCell>Nombre de Usuario</StyledTableCell>
                        <StyledTableCell>Acciones</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <ViewUserTable uno={props}/>
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}
export default TableUsers