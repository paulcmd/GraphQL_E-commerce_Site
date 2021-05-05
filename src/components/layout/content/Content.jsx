import React from 'react'
import { useStyles } from './ContentStyles';
import Product from './../../products/Product';


const Content = () => {
    const classes = useStyles()

    return <div className={classes.contentArea}>
    <Product /></div>
}

export default Content
