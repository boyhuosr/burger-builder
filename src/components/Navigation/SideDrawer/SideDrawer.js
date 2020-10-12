import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Auu from '../../../hoc/Auu'


const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]

    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Auu>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo /> 
                </div>
                
                <nav>
                    <NavigationItems /> 
                </nav>
            
            </div>
        </Auu>
       
    )
}

export default SideDrawer
