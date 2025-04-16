import React from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Paper, Typography, TextField, IconButton, Box ,Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
 

const cartItems = [
    {
        id: 1,
        name: 'Portable Drill 2000W',
        price: 39.00,
        quantity: 1,
        image: 'https://lazeapostolski.com/industrial2/img/shop1.jpg',
    },
    {
        id: 2,
        name: 'Deep Cut Band Saw - DWM120',
        price: 89.00,
        quantity: 2,
        image: 'https://lazeapostolski.com/industrial2/img/shop2.jpg',
    },
];

const centeredCellStyle = {
    borderRight: '1px solid #ddd',
    textAlign: 'center',
    verticalAlign: 'middle'
};
export default function ShopCP() {



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
                    Cart Page
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
                    Home  &gt;  <span style={{ color: "#fbae19" }}>Cart Page  </span>
                </Typography>
            </Box>













<Box>
                <Box sx={{ width: '80%', mx: 'auto', mt: 4 }}>
                    <TableContainer component={Paper} sx={{
                        borderRadius:0,
                    }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>
                                    <TableCell sx={centeredCellStyle}></TableCell>
                                    <TableCell sx={centeredCellStyle}>Preview</TableCell>
                                    <TableCell sx={centeredCellStyle}>Product</TableCell>
                                    <TableCell sx={centeredCellStyle}>Price</TableCell>
                                    <TableCell sx={centeredCellStyle}>Quantity</TableCell>
                                    <TableCell sx={{ textAlign: 'center', verticalAlign: 'middle' }}>Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cartItems.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell sx={centeredCellStyle}>
                                            <IconButton color="error">
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell sx={centeredCellStyle}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    style={{ width: 60, height: 60, objectFit: 'cover' }}
                                                />
                                            </Box>
                                        </TableCell>
                                        <TableCell sx={centeredCellStyle}>{item.name}</TableCell>
                                        <TableCell sx={centeredCellStyle}>${item.price.toFixed(2)}</TableCell>
                                        <TableCell sx={centeredCellStyle}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <TextField
                                                    type="number"
                                                    defaultValue={item.quantity}
                                                    InputProps={{ inputProps: { min: 1 } }}
                                                    sx={{
                                                        width: 100,
                                                        '& .MuiInputBase-root': { height: 36 },
                                                        '& .MuiInputBase-input': { padding: '8px 12px', textAlign: 'center' }
                                                    }}
                                                />
                                            </Box>
                                        </TableCell>
                                        <TableCell sx={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableRow>
                                <TableCell colSpan={6}>
                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        sx={{ p: 2 }}
                                    >
                                        {/* Left-side buttons */}
                                        <Box display="flex" gap={2}>
                                            <Button
                                                variant="outlined"
                                                sx={{
                                                    borderColor: '#fbae19',
                                                    color: '#fbae19',
                                                    '&:hover': {
                                                        backgroundColor: '#fbae19',
                                                        color: 'white',
                                                    },
                                                }}
                                            >
                                                Coupon Code
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                sx={{
                                                    borderColor: '#fbae19',
                                                    color: '#fbae19',
                                                    '&:hover': {
                                                        backgroundColor: '#fbae19',
                                                        color: 'white',
                                                    },
                                                }}
                                            >
                                                Apply Code
                                            </Button>
                                        </Box>

                                        {/* Right-side Buy button */}
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                borderColor: '#fbae19',
                                                color: '#fbae19',
                                                '&:hover': {
                                                    backgroundColor: '#fbae19',
                                                    color: 'white',
                                                },
                                            }}
                                        >
                                            Buy
                                        </Button>
                                    </Box>
                                </TableCell>
                            </TableRow>


                        </Table>
                    </TableContainer>
                </Box>
</Box>



<Box  sx={{
    my:5,
    // border:"1px solid red",
    display:"flex",
    alignItems:"flex-end",
    justifyContent:"end",
    width:"80%",
    justifySelf:"center",

}}>
                <Box
                    sx={{
                        width: '400px', 
                        // position: 'fixed',
                        top: 0,
                        right: 0,
                        padding: 2,
                        backgroundColor: '#fff',
                        boxShadow: 2,
                        // height: '100vh',
                    }}
                >
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Apply to Cart</Typography>

                    <Table>
                        <TableBody>
                            
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold', borderRight: '1px solid #ccc', borderLeft: '1px solid #ccc' }}>Subtotal</TableCell>
                                <TableCell align="right" sx={{ borderRight: '1px solid #ccc' }}>$120.00</TableCell>
                            </TableRow>

                             
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold', borderRight: '1px solid #ccc', borderLeft: '1px solid #ccc' }}>Shipping Type</TableCell>
                                <TableCell align="right" sx={{ borderRight: '1px solid #ccc' }}>Free Shipping</TableCell>
                            </TableRow>

                            
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold', borderRight: '1px solid #ccc', borderLeft: '1px solid #ccc', borderBottom: '2px solid #ddd' }}>Total</TableCell>
                                <TableCell align="right" sx={{ borderRight: '1px solid #ccc', borderBottom: '2px solid #ddd'  }}>$120.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                  
                    <Button
                        variant="outlined"
                        sx={{
                            width: '100%',
                            borderColor: '#fbae19',
                            color: '#fbae19',
                            '&:hover': {
                                backgroundColor: '#fbae19',
                                color: 'white',
                            },
                            mt: 3,
                        }}
                    >
                        Checkout
                    </Button>
                </Box>
</Box>



















        </Box>
    </>);
};