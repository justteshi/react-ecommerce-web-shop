import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Manu, MenuItem, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../../assets/commerce.png'
import useStyles from './styles'


const Navbar = () => {
    const classes = useStyles()

    return (
        <>
            <AppBar className={classes.appBar} position="fixed" color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img className={classes.image} src={logo} alt="Fresh and Lesh" height="25px"/>
                        Fresh and Lesh
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show Cart" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
