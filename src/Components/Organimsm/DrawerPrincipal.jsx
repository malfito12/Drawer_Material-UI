import React, { useState } from 'react'
import AppBarPrincipal from '../Molecules/AppBarPrincipal'
import DrawerS from '../Molecules/DrawerS'


const DrawerPrincipal=(props)=>{
    const [open,setOpen]=useState(false)
    const OpenDrawer=()=>{
        setOpen(true)
    }
    const CloseDrawer=()=>{
        setOpen(false)
    }
    return(
        <>
        <AppBarPrincipal OpenDrawer={OpenDrawer} />
        <DrawerS CloseDrawer={CloseDrawer} open={open} uno={props}/>
        </>
    )
}
export default DrawerPrincipal