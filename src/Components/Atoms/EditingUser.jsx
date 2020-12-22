import { Button, Container, FormControl, FormHelperText, Grid, Input, InputLabel } from '@material-ui/core'
import React, { useState } from 'react'

const EditingUser=(props)=>{
    
    const [datos, setDatos]=useState({
        nombre: props.currentUser.name,
        username: props.currentUser.username
    })
    const cambiodeDatos=(e)=>{
        setDatos({
            ...datos,
            [e.target.name]:e.target.value
        })
    }
    const enviarDatos=(e)=>{
        datos.id=props.currentUser.id
        props.updateUser(props.currentUser.id, datos)
        e.preventDefault()
        e.target.reset()

    }
    // console.log(a.name)
    return(
        <>
        <Container maxWidth='md'>
            <form onSubmit={enviarDatos}>
                <Grid container direction='column' justify='space-around' alignItems='stretch'>
                    <FormControl>
                        <InputLabel htmlFor='name' >Name</InputLabel>
                        <Input
                            name='name'
                            id='name'
                            type='text'
                            defaultValue={props.currentUser.name}
                            onChange={cambiodeDatos}
                            
                            
                        />
                        <FormHelperText>coloque su nombre</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='username' >User Name</InputLabel>
                        <Input
                            name='username'
                            id='username'
                            type='text'
                            defaultValue={props.currentUser.username}
                            onChange={cambiodeDatos}
                            
                        />
                        <FormHelperText>coloque su nombre de usuario</FormHelperText>
                    </FormControl>
                </Grid><br/>
                <Grid container justify='space-around'>
                    <Button type='submit'  variant='contained' color='primary'>EDITAR</Button>
                </Grid>
                
            </form>
        </Container>
        </>
    )
}
export default EditingUser