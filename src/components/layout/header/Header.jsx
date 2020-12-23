import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useStyles } from './HeaderStyles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const Header = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Button className={classes.headerBtn}>Home</Button>
                    <Button className={classes.headerBtn}>Login</Button>
                    <Button className={classes.headerBtn}>Signup</Button>

                    <Typography
                        align="center"
                        variant="h5"
                        className={classes.title}
                    >
                        E-commerce Site
                    </Typography>

                    <ShoppingCartIcon />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
