import React from 'react'
import { useStyles } from './ProductStyles'
import { products } from './dummyData'
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Grid
} from '@material-ui/core'

const Product = () => {
    const classes = useStyles()

    return (
        <Grid container>
            {products.map((product) => (
                <Grid key={product.id} className={classes.gridCard}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={product.image}
                                title={product.name}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    Phone
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    Phone description
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions></CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default Product
