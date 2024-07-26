import React from 'react';
import { Card, CardContent, Typography, CardMedia, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={`https://source.unsplash.com/random/200x200?sig=${product.id}`}
                alt={product.productName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.productName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Company: {product.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Rating: {product.rating}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Discount: {product.discount}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Availability: {product.availability}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" component={Link} to={`/product/${product.id}`}>View Details</Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
