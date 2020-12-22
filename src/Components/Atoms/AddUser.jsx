import { Button, Container, FormControl, FormHelperText, Grid, Input, InputLabel } from '@material-ui/core'
import React, { useState } from 'react'

const AddUser=(props)=>{
    const [change, setChange]=useState({
        id:'',
        name:'',
        username:''
    })

    const HandleInputChange=(event)=>{
        console.log(event.target.value)
        setChange({
            ...change,
            [event.target.name]: event.target.value
        })
        
    }
    const enviarDatos=(e)=>{
        const con=change
        const {enviar}=props
        enviar(con)
        e.preventDefault()
        e.target.reset()
    }
    
    return(
        <>
        <Container maxWidth='md'>
            <form onSubmit={enviarDatos}>
                <Grid container direction='column' justify='space-around' alignItems='stretch'>
                    <FormControl>
                        <InputLabel htmlFor='name'>Name</InputLabel>
                        <Input
                            name='name'
                            id='name'
                            type='text'
                            onChange={HandleInputChange}
                            required
                            
                        />
                        <FormHelperText>coloque su nombre</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='username'>User Name</InputLabel>
                        <Input
                            name='username'
                            id='username'
                            type='text'
                            onChange={HandleInputChange}
                            required
                        />
                        <FormHelperText>coloque su nombre de usuario</FormHelperText>
                    </FormControl>
                </Grid><br/>
                <Grid container justify='space-around'>
                    <Button type='submit'  variant='contained' color='primary'>Registrar</Button>
                </Grid>
                
            </form>
        </Container>
        {/* <button type='button' onClick={hijo}>ca</button> */}
        </>
    )
}
export default AddUser