import React from 'react';
import { Grid, TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';

const FilterBar = ({ filter, onFilterChange }) => {
    return (
        <Grid container spacing={2} alignItems="center" justifyContent="space-between">
            <Grid item>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select name="category" value={filter.category} onChange={onFilterChange}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="Laptop">Laptop</MenuItem>
                        <MenuItem value="Phone">Phone</MenuItem>
                        <MenuItem value="Tablet">Tablet</MenuItem>
                        <MenuItem value="PC">PC</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl fullWidth>
                    <InputLabel>Company</InputLabel>
                    <Select name="company" value={filter.company} onChange={onFilterChange}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="ANZ">ANZ</MenuItem>
                        <MenuItem value="AMZ">AMZ</MenuItem>
                        <MenuItem value="FLP">FLP</MenuItem>
                        <MenuItem value="EBY">EBY</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <TextField
                    name="minPrice"
                    label="Min Price"
                    type="number"
                    value={filter.minPrice}
                    onChange={onFilterChange}
                />
            </Grid>
            <Grid item>
                <TextField
                    name="maxPrice"
                    label="Max Price"
                    type="number"
                    value={filter.maxPrice}
                    onChange={onFilterChange}
                />
            </Grid>
            <Grid item>
                <TextField
                    name="rating"
                    label="Rating"
                    type="number"
                    value={filter.rating}
                    onChange={onFilterChange}
                />
            </Grid>
            <Grid item>
                <FormControl fullWidth>
                    <InputLabel>Availability</InputLabel>
                    <Select name="availability" value={filter.availability} onChange={onFilterChange}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="yes">Available</MenuItem>
                        <MenuItem value="out-of-stock">Out of Stock</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default FilterBar;
