import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const AboutPage = () => {
    return (
        <Container sx={{ py: 6 }}>
            <Typography variant="h3" align="center" gutterBottom color="primary" mt={5}>
                About Us
            </Typography>
            <Grid container justifyContent="center" spacing={5} mt={6}>
                <Grid item xs={12} sm={6} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            style={{ height: 250 }} // Adjusted height
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                        Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutPage;
