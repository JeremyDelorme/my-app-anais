import { items as productsDataItems } from '../productsData';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Product } from '../productsData'; // Ensure the import path is correct

const cardMediaStyle = {
    height: 250, // Adjusted height
};

const vibrantColors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9']; // Vibrant color palette

const ShopPage = () => {
    const prints: Product[] = productsDataItems || []; // Extracting items from productsData

    return (
        <Container sx={{ py: 6 }}>
            <Typography variant="h3" align="center" gutterBottom color="primary" mt={5}>
                Welcome to Our Gallery
            </Typography>
            {/* ... Existing content */}

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
                                image={print.image}
                                title={print.name}
                            />
                            <CardContent>
                                <Typography variant="h6">{print.name}</Typography>
                                <Typography variant="body1">Price: ${print.price}</Typography>
                                <Typography variant="body1">Quantity: {print.quantity}</Typography>
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

export default ShopPage;
