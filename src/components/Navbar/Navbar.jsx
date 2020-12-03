import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Manu, MenuItem, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/commerce.png'
import useStyles from './styles'


const Navbar = ({ totalItems }) => {
    const classes = useStyles()
    const location = useLocation()


    return (
        <>
            <AppBar className={classes.appBar} position="fixed" color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img className={classes.image} src={logo} alt="Fresh and Lesh" height="25px"/>
                        Fresh and Lesh
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname == '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show Cart" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
