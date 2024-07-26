import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography, Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';
import Pagination from './Pagination';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filter, setFilter] = useState({ category: '', company: '', rating: 0, minPrice: 0, maxPrice: 10000, availability: '' });
    const [page, setPage] = useState(1);
    const [pageSize] = useState(10);

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [filter, products]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://20.244.56.144/test/companies/ANZ/categories/Laptop/products/top-10?minPrice=1&maxPrice=10000');
            const data = response.data.map((product, index) => ({
                ...product,
                id: index + 1
            }));
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const applyFilters = () => {
        let filtered = products.filter(product => 
            (filter.category ? product.category === filter.category : true) &&
            (filter.company ? product.company === filter.company : true) &&
            (filter.rating ? product.rating >= filter.rating : true) &&
            (filter.availability ? product.availability === filter.availability : true) &&
            product.price >= filter.minPrice &&
            product.price <= filter.maxPrice
        );

        setFilteredProducts(filtered);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
    };

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>Product List</Typography>
            <FilterBar filter={filter} onFilterChange={handleFilterChange} />
            <Grid container spacing={2}>
                {filteredProducts.slice((page - 1) * pageSize, page * pageSize).map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
            <Pagination count={Math.ceil(filteredProducts.length / pageSize)} page={page} onChange={handlePageChange} />
        </div>
    );
};

export default ProductList;
