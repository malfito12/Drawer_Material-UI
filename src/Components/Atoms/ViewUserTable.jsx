// import classes from '*.module.sass'
import { Button, IconButton, makeStyles, Modal, TableCell, TableRow, TextField } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'
import React, { useState } from 'react'

const useStyles=makeStyles((theme)=>({
    modal:{
        position:'absolute',
        width: 400,
        background: 'white',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    textfield:{
        width: '100%'
    },
    spacing:{
        '& > *':{
            margin: theme.spacing(1)
        }
    }
}))
const ViewUserTable = (props) => {
    const classes=useStyles()

    const [modal, setModal]=useState(false)
    const openCloseModal=()=>{
        setModal(!modal)
    }
    const body=(
        <div className={classes.modal}>
            <div aling='center'>
                <h2>Formulario</h2>
            </div>
            <TextField variant="outlined" label='Nombre' className={classes.textfield}/><br/><br/>
            <TextField variant="outlined" label='Nombre de Usuario' className={classes.textfield}/><br/><br/>
            <div aling='right' className={classes.spacing}>
                <Button variant='contained' color='primary' >Enviar</Button>
                <Button onClick={()=>openCloseModal()}>Cancelar</Button>
            </div>
        </div>
        
    )
    return (
        <>
            {
                props.uno.users.length > 0 ? (
                    props.uno.users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>
                                <IconButton onClick={()=>props.uno.editRow(user)}>
                                    <Edit />
                                </IconButton>
                                <IconButton onClick={()=>props.uno.deleteUser(user.id)}>
                                    <Delete />
                                </IconButton>
                                <IconButton onClick={()=>openCloseModal()}>
                                    <Delete />
                                </IconButton>
                                <Modal
                                    open={modal}
                                    // onClose={openCloseModal}
                                >
                                    {body}
                                </Modal>
                            </TableCell>
                        </TableRow>
                    ))
                ) : <TableRow>
                        <TableCell colSpan={3}>No Users</TableCell>
                    </TableRow>
            }
        </>
    )
}
export default ViewUserTable