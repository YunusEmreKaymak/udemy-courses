import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { useLocation } from 'react-router';
function Copyright() {

    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Udemy
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Category() {
    const location = useLocation();
    localStorage.setItem('url', location.pathname);
    const [allCards, setAllCards] = useState([]);
    const fetchdata = async () => {
        await fetch("http://localhost:8080/course/category/" + location.state)
            .then(response => response.json())
            .then(data => setAllCards(data))
        // .then(data => allCards.map((card,index) => console.log(index,card.name)));     

    }
    useEffect(() => {
        fetchdata()
        console.log("ALLCARDS", allCards);
    }, [location.state])

    const handleDelete = (props: any) => {
        console.log("PROPS", props);
        axios.delete("http://localhost:8080/course/" + props);
    }

    return (
        <div>
            <CssBaseline />
            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {allCards.map((card, key) => (
                            <Grid item key={key} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image={card['imageUrl']}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card['name']}
                                        </Typography>
                                        <Typography>
                                            Price: ${card['price']} <br />
                                            Teacher: {card['ownerName']} <br />
                                            Rate: {card['rate']}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => handleDelete(card['name'])}>Delete</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Copyright />
            </Box>

            {/* End footer */}
        </div>
    );
}