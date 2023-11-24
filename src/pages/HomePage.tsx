import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const cardMediaStyle = {
    height: 250, // Adjusted height
};

const Home = () => {
    const prints = [
        { id: 1, title: 'Print 1', imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, title: 'Print 2', imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, title: 'Print 3', imageUrl: 'https://via.placeholder.com/150' }, // Added a third print
    ];

    const vibrantColors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9']; // Vibrant color palette

    return (
        <Container sx={{ py: 6 }}>
            <Typography variant="h3" align="center" gutterBottom color="primary" mt={5}>
                Welcome to Our Gallery
            </Typography>
            <Typography variant="h5" align="center" gutterBottom color="textSecondary" mt={3}>
                Discover our collection of unique prints and events.
            </Typography>

            <Grid container justifyContent="center" spacing={5} mt={6}>
                <Grid item xs={12} sm={6} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            style={cardMediaStyle}
                            image="https://via.placeholder.com/300"
                            title="About Us"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h4" align="center" gutterBottom color="primary">
                        About Us
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                        laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                    </Typography>
                </Grid>
            </Grid>

            <Typography variant="h4" align="center" mt={6} color="primary">
                Prints
            </Typography>
            <Grid container justifyContent="center" spacing={4}>
                {prints.map((print) => (
                    <Grid item key={print.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                style={cardMediaStyle}
                                image={print.imageUrl}
                                title={print.title}
                            />
                            <CardContent>
                                <Typography variant="h6">{print.title}</Typography>
                                {/* Additional print card details */}
                            </CardContent>
                            <Button variant="contained" sx={{ bgcolor: vibrantColors[Math.floor(Math.random() * vibrantColors.length)] }}>See More</Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;
