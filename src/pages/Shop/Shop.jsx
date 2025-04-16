

import React from 'react';
import {
    Box,
    Card,
    CardContent,
    TextField,
    Typography,
    Grid, CardMedia,
    Stack,
    Button,
    Rating,
    Container, Pagination,  
    InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const categories = ['Manufacturing', 'Chemical', 'Construction', 'Energy', 'Materials'];

const productsW = [
    {
        title: 'Gutter Supply',
        price: '$39.00',
        image: 'https://lazeapostolski.com/industrial2/img/shop2.jpg',
    },
    {
        title: 'Deep Cut Band Saw - DWM120',
        price: '$39.00',
        image: 'https://lazeapostolski.com/industrial2/img/shop1.jpg',
    },
    {
        title: 'Gutter Supply',
        price: '$39.00',
        image: 'https://lazeapostolski.com/industrial2/img/shop3.jpg',
    }, {
        title: 'Gutter Supply',
        price: '$39.00',
        image: 'https://lazeapostolski.com/industrial2/img/shop2.jpg',
    },
    {
        title: 'Deep Cut Band Saw - DWM120',
        price: '$39.00',
        image: 'https://lazeapostolski.com/industrial2/img/shop1.jpg',
    },
    {
        title: 'Gutter Supply',
        price: '$39.00',
        image: 'https://lazeapostolski.com/industrial2/img/shop3.jpg',
    }, {
        title: 'Gutter Supply',
        price: '$39.00',
        image: 'https://lazeapostolski.com/industrial2/img/shop2.jpg',
    },
    {
        title: 'Deep Cut Band Saw - DWM120',
        price: '$39.00',
        image: 'https://lazeapostolski.com/industrial2/img/shop1.jpg',
    },
    {
        title: 'Gutter Supply',
        price: '$39.00',
        image: 'https://lazeapostolski.com/industrial2/img/shop3.jpg',
    },
];

const products = [
    {
        title: 'Portable Drill 2000W',
        price: '$39.00',
        image: 'https://lazeapostolski.com/industrial2/img/shop-thumbnail.jpg',
    },
    {
        title: 'Portable Drill 2000W',
        price: '$39.00',
        image: 'https://lazeapostolski.com/industrial2/img/shop-thumbnail2.jpg',
    },
    {
        title: 'Portable Drill 2000W',
        price: '$39.00',
        image: 'https://lazeapostolski.com/industrial2/img/shop-thumbnail3.jpg',
    },
];

const tags = [
    'Future', 'Science', 'Factory', 'Industrial',
    'Construction', 'Glass', 'Helmet', 'Wind Energy', 'Gloves'
];
// const cardData = [
//     {
//         img: 'https://lazeapostolski.com/industrial2/img/news-thumb1.jpg',
//         title: 'How Advanced Manufactoring is Transforming the FACTORY',
//         date: 'Nov 14, 2016',
//         desc: 'Etiam porta, leo sit amet faucibus consectetur, nunc tortor facilisis elit, quis viverra turpis ligula eget purus. Mauris tempor congue ligula et euismod. gna.',
//     },
//     {
//         img: 'https://lazeapostolski.com/industrial2/img/news-thumb2.jpg',
//         title: 'Solar Power becoming cheap enough to compete with Fuels',
//         date: 'Nov 14, 2016',
//         desc: 'Etiam porta, leo sit amet faucibus consectetur, nunc tortor facilisis elit, quis viverra turpis ligula eget purus. Mauris tempor congue ligula et euismod. gna.',
//     },
//     {
//         img: 'https://lazeapostolski.com/industrial2/img/news-thumb3.jpg',
//         title: 'How Advanced Manufactoring is Transforming the FACTORY',
//         date: 'Nov 14, 2016',
//         desc: 'Etiam porta, leo sit amet faucibus consectetur, nunc tortor facilisis elit, quis viverra turpis ligula eget purus. Mauris tempor congue ligula et euismod. gna.',
//     },
//     {
//         img: 'https://lazeapostolski.com/industrial2/img/news-thumb4.jpg',
//         title: 'Solar Power becoming cheap enough to compete with Fuels',
//         date: 'Nov 14, 2016',
//         desc: 'Etiam porta, leo sit amet faucibus consectetur, nunc tortor facilisis elit, quis viverra turpis ligula eget purus. Mauris tempor congue ligula et euismod. gna.',
//     },
//     {
//         img: 'https://lazeapostolski.com/industrial2/img/news-thumb5.jpg',
//         title: 'How Advanced Manufactoring is Transforming the FACTORY',
//         date: 'Nov 14, 2016',
//         desc: 'Etiam porta, leo sit amet faucibus consectetur, nunc tortor facilisis elit, quis viverra turpis ligula eget purus. Mauris tempor congue ligula et euismod. gna.',
//     },
//     {
//         img: 'https://lazeapostolski.com/industrial2/img/news-thumb6.jpg',
//         title: 'Solar Power becoming cheap enough to compete with Fuels',
//         date: 'Nov 14, 2016',
//         desc: 'Etiam porta, leo sit amet faucibus consectetur, nunc tortor facilisis elit, quis viverra turpis ligula eget purus. Mauris tempor congue ligula et euismod. gna.',
//     },
// ];




export default function Shop() {



    return (<>
        <Box>
            <Box
                sx={{
                    height: "35vh",
                    backgroundImage: "url(https://lazeapostolski.com/industrial2/img/pages-header.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h5" color="black" fontWeight="bold">
                    Shop
                </Typography>
            </Box>


            <Box
                sx={{
                    // my:2,
                    py: 2,
                    bgcolor: "white",
                    borderBottom: "1px solid black",
                }}>
                <Typography
                    sx={{
                        color: "black",
                        textAlign: "center",
                        fontSize: "0.8rem"
                    }}>
                    Home  &gt;  <span style={{ color: "#fbae19" }}>  Shop</span>
                </Typography>
            </Box>



























            <Box sx={{
                display: 'flex',
                // border:"1px solid red",
                justifyContent: "center",
                alignItems: "center",
                my: 10,
            }}>

                <Box sx={{
                    display: 'flex',
                    // border: "1px solid red",
                    maxWidth: '1200px',
                    // margin: '0 auto',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    // width:{xs:"90%"},
                    width: {
                        xs: '95%',
                        md: '890px',
                        lg: '1180px',
                    },
                    gap: { xs: 5, md: 0 },
                }}>

                    <Box sx={{
                        // flexBasis: { md: '80%' },
                        // border: "2px solid blue",

                        maxWidth: {
                            xs: '100%',
                            md: '610px',
                            lg: '850px',
                        },
                        px: 2,

                    }}>
                        {/* <Card sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h5">Card 1</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This is the first card content. It contains some example text.
                                </Typography>
                            </CardContent>
                        </Card> */}
                        {/* 
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Card 2</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This is the second card content. It also contains some example text.
                                </Typography>
                            </CardContent>
                        </Card> */}




                        <Grid container sx={{
                            display: "flex",
                            width: "100%",
                            // width:"800px",
                            // border:"2px solid yellow",
                            justifyContent: { xs: "center", sm: "space-between" },
                            alignItems: "center",
                        }} >
                            {productsW.map((product, index) => (
                                <Card key={index} sx={{ 
                                    display: 'flex', 
                                    position: "relative",
                                     boxShadow: 1,
                                    // border: "2px solid black",
                                    // display:"flex",
                                    flexDirection:"column",

                                    width: { xs: "100%", sm: "46%", md: "280px", lg: "245px" },
                                    height: { xs: "410px", sm: "%", md: "400px", lg: "390px" },
                                    borderRadius: 0,
                                    mx:{xs:0, md:1},
                                    mb:4,
                                 }}>
                                    <CardMedia
                                        component="img"
                                        image={product.image}
                                        alt={product.title}
                                        sx={{ width: "100%", maxHeight: "65%", objectFit: 'cover' }}
                                    />
                                    <CardContent sx={{ flex: 1, p: 1 }}>
                                        <Typography variant="body2" fontWeight="bold">
                                            {product.title}
                                        </Typography>
                                        <Rating size="small" value={4} readOnly sx={{ mb: 0.5 }} />
                                        <Typography variant="body1" color="text.secondary" fontWeight="bold">
                                            {product.price}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                position: { xs: "absolute",sm:"absolute", md:"absolute"},
                                                bottom:{xs:"5%" ,sm:"5%", md:"5%"},
                                                width: '120px',
                                                alignSelf: 'flex-start',
                                                borderRadius: 0,
                                                fontSize:"0.7rem",
                                                background: '#fbae19',
                                                color: 'white',
                                                // fontWeight: 'bold',
                                                // p: 1,
                                                // py: 1,
                                                backgroundSize: '200% auto',
                                                transition: '0.4s',
                                                backgroundImage:
                                                    'linear-gradient(to left, #fbae19 50%, #062d4c 50%)',
                                                backgroundPosition: 'right center',
                                                '&:hover': {
                                                    backgroundPosition: 'left center',
                                                },
                                            }}
                                        >
                                            Add to cart
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </Grid>


                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                            <Pagination
                                count={5}
                                shape="rounded"
                                sx={{
                                    '& .MuiPaginationItem-root': {
                                        color: '#000',
                                        border: '1px solid #fbae19',
                                        '&:hover': {
                                            backgroundColor: '#fbae19',
                                            color: '#fff',
                                        },
                                    },
                                    '& .Mui-selected': {
                                        backgroundColor: '#fbae19 ',
                                        color: '#fff',
                                        border: '1px solid #fbae19',
                                    },
                                }}
                            />
                        </Box>
                            


                    </Box>


                    <Box sx={{
                        // flexBasis: { md: '20%' },
                        // border:"2px solid green",
                        width: {
                            xs: '100%',
                            md: '320px',
                            lg: '350px',
                        },
                        // width: '100%'
                    }}>
                        <Box sx={{
                            p: 0,
                            maxWidth: '100%',
                            m: 0,
                            px: { xs: 2, md: 0 },
                            pl: { xs: 0, md: 1 },
                        }}>
                            <Box
                                sx={{
                                    // px:2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: '100%',
                                    // maxWidth: 400,
                                    border: '1px solid #ccc',
                                    // borderRadius: '4px',
                                    overflow: 'hidden',
                                }}
                            >
                                <TextField
                                    fullWidth
                                    placeholder="Search..."
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    sx={{
                                        pl: 2,
                                        '& input::placeholder': {
                                            color: '#aaa',
                                        },
                                    }}
                                />
                                <Box
                                    sx={{
                                        bgcolor: '#fbae19',
                                        p: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <SearchIcon sx={{ color: 'white' }} />
                                </Box>
                            </Box>

                        </Box>

                        <Box sx={{
                            width: '100%',
                            bgcolor: 'background.paper',
                            // border: '1px solid #ddd', 
                            mt: 4,
                        }}>
                            <Typography variant="h6" sx={{
                                px: 2,
                                py: 2,
                                fontWeight: 500
                            }}>
                                Categories
                            </Typography>
                            <List sx={{

                            }}>
                                {categories.map((cat, idx) => (
                                    <React.Fragment key={cat}>
                                        <ListItem
                                            secondaryAction={<ArrowForwardIosIcon sx={{
                                                fontSize: 14,
                                                color: 'text.secondary',
                                            }} />}
                                            sx={{
                                                px: 2, py: 1,
                                                '&:hover': {
                                                    bgcolor: '#fbae19',
                                                    color: 'white',
                                                    cursor: 'pointer',
                                                    '& svg': {
                                                        color: 'white',
                                                    },
                                                },
                                            }}
                                        >
                                            <ListItemText primary={cat} primaryTypographyProps={{ fontWeight: 100 }}
                                                sx={{

                                                }} />
                                        </ListItem>
                                        {idx < categories.length - 1 && <Divider />}
                                    </React.Fragment>
                                ))}
                            </List>
                        </Box>






                        <Box sx={{ maxWidth: '100%', p: 2, }}>
                            <Typography variant="h6" fontWeight="bold" mb={2} 
                            sx={{
                                fontWeight: 500,

                                // px: 2,
                                py: 2,
                            }}>
                                Popular Products
                            </Typography>

                            {products.map((product, index) => (
                                <Card key={index} sx={{ display: 'flex', mb: 2, boxShadow: 0 }}>
                                    <CardMedia
                                        component="img"
                                        image={product.image}
                                        alt={product.title}
                                        sx={{ width: 80, height: 80, objectFit: 'cover' }}
                                    />
                                    <CardContent sx={{ flex: 1, p: 1 }}>
                                        <Typography variant="body1" fontWeight="bold" gutterBottom
                                        sx={{
                                        fontWeight:400,
                                            '&:hover': {
                                                // backgroundColor: '#fbae19',
                                                color: '#fbae19',
                                                cursor:"pointer",
                                            },
}}
                                        >
                                            {product.title}
                                        </Typography>
                                        <Rating size="small" value={4} readOnly sx={{ mb: 0.5 }} />
                                        <Typography variant="body2" fontWeight="bold">
                                            {product.price}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}

                            <Divider sx={{ my: 2 }} />

                            <Typography variant="h6" fontWeight="bold" sx={{
                                fontWeight: 500,

                                // px: 2,
                                py: 2,
                            }}>
                                Filter By Price
                            </Typography>
                            <Button
                                sx={{
                                    color: 'black',
                                    border:"1px solid #ccc",

                                    borderRadius: 0,
                                    px: 1,
                                    '&:hover': {
                                        backgroundColor: '#fbae19',
                                        color: 'white',
                                    },
                                }}
                            >
                                SUBMIT
                            </Button>
                        </Box>

                        {/* <Box sx={{ maxWidth: '100%', p: 2 }}>
                            <Typography variant="h6" gutterBottom sx={{
                                // px: 2,
                                py: 2,
                            }}>
                                Popular Post
                            </Typography>

                            <Stack spacing={2}>
                                {[1, 2, 3].map((item, i) => (
                                    <>

                                        <Box key={i} sx={{ display: 'flex', gap: 2 }}>
                                            <Box
                                                component="img"
                                                src={`https://picsum.photos/seed/post${i}/80/80`}
                                                alt="Post thumbnail"
                                                sx={{ width: 80, height: 80, borderRadius: 1 }}
                                            />
                                            <Box>
                                                <Typography variant="body1" fontWeight={100} sx={{
                                                    fontSize: { xs: "1rem", md: "0.8rem" },
                                                    '&:hover': {
                                                        cursor: "pointer",
                                                        // backgroundColor: '#fbae19',
                                                        color: '#fbae19',
                                                    },
                                                }}>
                                                    How Advanced Manufacturing is Transforming the FACTORY
                                                </Typography>
                                                <Typography variant="caption" color="text.secondary">
                                                    October 21, 2016
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Divider sx={{
                                            //  my: 1, 
                                            width: "95%",
                                        }} />
                                    </>

                                ))}
                            </Stack> */}

                            {/* <Divider sx={{  }} /> */}

                            {/* <Typography variant="h6" gutterBottom sx={{
                                mt: 6
                            }}>
                                Text Widget
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                pr: 2,
                            }}>
                                Morbi tincidunt iaculis ipsum eget laoreet. Cras at finibus ante,
                                posuere ornare ex. Mauris sollicitudin ornare ullamcorper. Donec in arcu
                                purus. Phasellus ullamcorper.
                            </Typography>
                        </Box> */}




                        <Box sx={{ maxWidth: '100%', px: 2, mt: 4 }}>
                            <Typography variant="h6" gutterBottom>
                                Popular Tags
                            </Typography>

                            <Stack direction="row" flexWrap="wrap" gap={1}>
                                {tags.map((tag, index) => (
                                    <Button
                                        key={index}
                                        variant="outlined"
                                        sx={{
                                            // borderColor: 'transparent',
                                            borderRadius: 0,
                                            fontSize: "0.8rem",
                                            color: '#ccc',
                                            border: "1px solid #ddd",
                                            '&:hover': {
                                                backgroundColor: '#fbae19',
                                                color: 'white',
                                            },
                                        }}
                                    >
                                        {tag}
                                    </Button>
                                ))}
                            </Stack>
                        </Box>




                    </Box>
                </Box>

            </Box>

































        </Box>
    </>);
};