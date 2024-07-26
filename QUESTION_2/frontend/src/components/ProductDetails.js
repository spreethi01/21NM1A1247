import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProductDetails();
    }, [id]);

    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`http://20.244.56.144/test/companies/ANZ/categories/Laptop/products/top-10?minPrice=1&maxPrice=10000`);
            const product = response.data.find((p, index) => index + 1 === parseInt(id));
            setProduct(product);
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    if (!product) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={`https://source.unsplash.com/random/300x300?sig=${product.id}`}
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
                    Category: {product.category}
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
        </Card>
    );
};

export default ProductDetails;
