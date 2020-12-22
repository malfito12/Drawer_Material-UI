import { Grid } from '@material-ui/core'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddUser from '../Atoms/AddUser'
import EditingUser from '../Atoms/EditingUser'
import TableUsers from '../Molecules/TableUsers'

const data = [
    { id: uuidv4(), name: 'Alex', username: 'malfito12' },
    { id: uuidv4(), name: 'Maria', username: 'Maria123' },
    { id: uuidv4(), name: 'Edgar', username: 'edCojones' },
    { id: uuidv4(), name: 'Totish', username: 'Melapelas' },
    { id: uuidv4(), name: 'Marisol', username: 'TuPutita' }
]



const Primero =()=>{
    const [users, setUsers]=useState(data)

    // useEffect(()=>{
    //     Axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(resp=> setUsers(resp.data))
    // },[])
    

    //AÑADIR USUARIO
    const enviar=(props)=>{
        props.id=uuidv4()
        setUsers([...users,props])
        
    }

    //EDITAR USUARIO
    const [editing, setEditing]=useState(false)

    const [currentUser, setCurrentUser]=useState({
        id:null,
        name:'',
        username:''
    })

    const editRow=(usuario)=>{
        setEditing(true)
        setCurrentUser({
            id: usuario.id,
            name: usuario.name,
            username:usuario.username
        })
    }
    
    const updateUser=(id, updatedUser)=>{
        setEditing(false)
        setUsers(users.map(user=>(user.id===id? updatedUser : user)))

    }

    //ELIMINAR USUARIO
    const deleteUser=(id)=>{
        setUsers(users.filter(user=>user.id !== id))
    }

    return(
        <>
        <h1 align='center'>Lista de Usuarios</h1>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                {editing ?(
                    <div>
                        <h2 align='center'> EDIT USER</h2>
                        <EditingUser currentUser={currentUser} updateUser={updateUser}/>
                    </div>
                    
                ):( <div>
                        <h2 align='center'>ADD USER</h2>
                        <AddUser enviar={enviar}  />
                    </div>  
                )
            }
            </Grid>
            <Grid item xs={12} sm={6}>
                <h2 align='center'>USER TABLE</h2>
                <TableUsers 
                    users={users} 
                    deleteUser={deleteUser} 
                    editRow={editRow}
                />
            </Grid>
            
        </Grid>
        </>
    )
}
export default Primero