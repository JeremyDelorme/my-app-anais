import { items as productsDataItems } from '../productsData';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, TextField } from '@mui/material';
import { Product } from '../productsData'; // Ensure the import path is correct

import ButtonComponent from '../components/ButtonComponent';

const cardMediaStyle = {
    height: 300, // Increased height for bigger cards
};

const vibrantColors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9']; // Vibrant color palette

const HomePage = () => {
    const prints: Product[] = productsDataItems || []; // Extracting items from productsData

    return (
        <Container sx={{ py: 6 }}>
            <Typography variant="h3" align="center" gutterBottom color="primary" mt={5}>
                Ah ben bonjour là
            </Typography>

            {/* Hero Section */}
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <CardMedia
                        component="img"
                        style={{ height: '100%', objectFit: 'cover' }}
                        image="/allPoulets.jpeg" // Replace with your image URL
                        title="Hero Image"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" color="primary" mt={3} mb={2}>
                        Je fais des choses
                    </Typography>
                    <Typography variant="body1">
                        Enwaye donc par là regarde comment j'suis nice
                    </Typography>
                </Grid>
            </Grid>

            {/* About Section */}
            <Typography variant="h4" align="center" mt={6} color="primary">
                Des naffaires sur moé
            </Typography>
            <Typography variant="body1" align="center" mt={2} color="primary">
                Je faisais de la nage synchronisée
            </Typography>

            {/* Prints Section */}
            <Typography variant="h4" align="center" mt={6} color="primary">
                Pressions
            </Typography>
            <Grid container justifyContent="center" spacing={4}>
                {prints.map((print) => (
                    <Grid item key={print.id} xs={12} sm={6} md={4}>
                        <Card sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <CardMedia
                                component="img"
                                style={cardMediaStyle}
                                image={print.image}
                                title={print.name}
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h6" color="primary">{print.name}</Typography>
                                <ButtonComponent>Aweye donc</ButtonComponent> {/* Provide the text inside ButtonComponent */}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Contact Form */}
            <Typography variant="h4" align="center" mt={6} color="primary">
                Tu veux savoir c'est quoi les affaires que j'fais?
            </Typography>
            <Grid container justifyContent="center" mt={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Rentre donc ton email là"
                        variant="outlined"
                        fullWidth
                    // Add your subscription handling logic here onSubmit or onChange
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;
