
import { Box, Typography, Link } from '@mui/material';
import { TextField, Button, Checkbox, FormControlLabel ,Grid, Divider } from '@mui/material';


export default function MSE() {



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
                    Checkout Page
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
                    Home  &gt;  <span style={{ color: "#fbae19" }}>  Checkout Page</span>
                </Typography>
            </Box>
























<Box sx={{

    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    my:10,
}}>



                <Box
                    sx={{
                        backgroundColor: '#f5f5f5', 
                        width: {
                            xs: '95%',
                            sm: "600px",
                            md: '880px',
                            lg: '1170px',
                        },
                        // padding: 3,
                        py:3,
                        textAlign: 'start',
                    }}
                >
                    <Typography variant="body1" color="text.secondary" sx={{
                        pl: {xs:2, sm:6},
                    }}>
                        Returning customer?
                        <Link
                            href="###"
                            sx={{
                                color: '#fbae19',
                                textDecoration: 'none',
                                '&:hover': {
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                },
                            }}
                        >
                             Click here to login
                        </Link>
                    </Typography>
                </Box>

















<Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // flexDirection: "column",
                    // width:"80%",
                    width: {
                        xs: '95%',
                        sm:"600px",
                        md: '880px',
                        lg: '1170px',
                    },
                        p:1,
                    // my: 10,
}}>
                    <Box sx={{
                         display: 'flex',
                        //   flexWrap: 'wrap', 
                          gap: 2, 
                        // px: { xs: 2, sm: 4 }, 
                        py: 4 ,
                        // px: { xs: 1, md: 1 },
                        flexDirection: { xs:"column", md:"row"},

                        }}>
                         
                        <Box
                            sx={{
                                flex: 1,
                                minWidth: '300px',
                                border: '1px solid #ccc',
                                // p:{xs:0, sm: 3},
                                p: { xs: 0.5, sm: 3 },
                                borderRadius: 2,
                                backgroundColor: '#f9f9f9',
                            }}
                        >
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                Billing Details
                            </Typography>
                            <form>
                                <Grid container spacing={0} sx={{
                                    width: "100%",
                                    display: "flex",
                                    gap: { xs: 3, md: 0 },
                                    mb: 2,
                                    justifyContent: "space-between",
                                    // border:"1px solid red",
                                }}>
                                    <Grid item xs={12} md={6} lg={12} sx={{
                                        width: { xs: '100%', md: '49%' },
                                    }}>
                                        <TextField
                                            label="Your Name"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={12} sx={{
                                        width: { xs: '100%', md: '49%' },
                                    }}>
                                        <TextField
                                            label="Last Name  "
                                            variant="outlined"
                                            fullWidth
                                            type="email"
                                        />
                                    </Grid>
                                </Grid>
                                <TextField
                                    fullWidth
                                    label="Company Name"
                                    variant="outlined"
                                    sx={{ mb: 2 }}
                                />




                                <TextField
                                    fullWidth
                                    label="Address  "
                                    variant="outlined"
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label="Address"
                                    variant="outlined"
                                    sx={{ mb: 2 }}
                                />
                                {/* <TextField
                                    fullWidth
                                    label="City"
                                    variant="outlined"
                                    sx={{ mb: 2 }}
                                /> */}
                                <TextField
                                    fullWidth
                                    label="Town / City"
                                    variant="outlined"
                                    sx={{ mb: 2 }}
                                />
                                <Grid container spacing={0} sx={{
                                    width: "100%",
                                    display: "flex",
                                    gap: { xs: 3, md: 0 },
                                    mb: 2,
                                    justifyContent: "space-between",
                                    // border:"1px solid red",
                                }}>
                                    <Grid item xs={12} md={6} lg={12} sx={{
                                        width: { xs: '100%', md: '49%' },
                                    }}>
                                        <TextField
                                            label="State / Country"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={12} sx={{
                                        width: { xs: '100%', md: '49%' },
                                    }}>
                                        <TextField
                                            label="Postcode / Zip"
                                            variant="outlined"
                                            fullWidth
                                            type="email"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={0} sx={{
                                    width: "100%",
                                    display: "flex",
                                    gap: { xs: 3, md: 0 },
                                    mb: 2,
                                    justifyContent: "space-between",
                                    // border:"1px solid red",
                                }}>
                                    <Grid item xs={12} md={6} lg={12} sx={{
                                        width: { xs: '100%', md: '49%' },
                                    }}>
                                        <TextField
                                            label="Email Address"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={12} sx={{
                                        width: { xs: '100%', md: '49%' },
                                    }}>
                                        <TextField
                                            label="Phone"
                                            variant="outlined"
                                            fullWidth
                                            type="email"
                                        />
                                    </Grid>
                                </Grid>


                                <FormControlLabel
                                sx={{
                                    mb: 2,
                                }}
                                    control={
                                        <Checkbox
                                            sx={{
                                                // mb: 2,
                                                '& .MuiSvgIcon-root': {
                                                    color: '#fbae19',
                                                    '&.Mui-checked': {
                                                        color: '#fbae19',
                                                    },
                                                },
                                            }}
                                        />
                                    }
                                    label="Create an account?"
                                />
                                <TextField
                                    label="Order Notes"
                                    multiline
                                    rows={3}
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            height: 'auto',
                                        },
                                    }}
                                />
                              
                            </form>
                        </Box>

                        
                        <Box
                            sx={{
                                flex: 1,
                                minWidth: '300px',
                                border: '1px solid #ccc',
                                // p: 3,
                                // p: { xs: 0, sm: 3 },
                                p: { xs: 0.5, sm: 3 },

                                borderRadius: 2,
                                backgroundColor: '#f9f9f9',
                            }}
                        >
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                Your Order
                            </Typography>


                         
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2">Product Total</Typography>
                                    <Typography variant="body2">$140.00</Typography>
                                </Box>

                                {/* Deep Cut Band Saw */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2">Deep Cut Band Saw - DWM120</Typography>
                                    <Typography variant="body2">$45.00</Typography>
                                </Box>

                                {/* Gutter Supply */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2">Gutter Supply</Typography>
                                    <Typography variant="body2">$20.00</Typography>
                                </Box>

                                {/* DeWalt D28755 */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2">DeWalt D28755 14" (355mm) Cut-Off Machine</Typography>
                                    <Typography variant="body2">$75.00</Typography>
                                </Box>

                                {/* Subtotal */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, fontWeight: 'bold' }}>
                                    <Typography variant="body2">Subtotal</Typography>
                                    <Typography variant="body2">$75.00</Typography>
                                </Box>

                                {/* Shipping */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2">Shipping</Typography>
                                    <Typography variant="body2">Flat Rate</Typography>
                                </Box>
                            <Divider sx={{ my: 2 }} />

                               
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, fontWeight: 'bold' }}>
                                    <Typography variant="body2">Total</Typography>
                                    <Typography variant="body2">$140.00</Typography>
                                </Box>

                               

                               
                                <Typography variant="body2" fontWeight="bold" sx={{ mt: 2 }}>
                                    Payment Method:
                                </Typography>
                                <Typography variant="body2">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    color: '#fbae19',
                                                    '&.Mui-checked': {
                                                        color: '#fbae19',
                                                    },
                                                },
                                            }}
                                        />
                                    }
                                    label="Direct Bank Transfer"
                                />
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1,
                                bgcolor:"#A9A9A9",
                                // mx:-3,
                                mx: { xs: 0, sm: -3 },

                                // p:3,
                                p: { xs: 0, sm: 3 },

                                // py:4,
                                 }}>
                                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
                                </Typography>

                            
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', 
                                alignItems:"center"
                                ,mb: 2, fontWeight: 'bold', mt: 0 }}>
                                <Typography variant="body2" sx={{  }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        color: '#fbae19',  
                                                        '&.Mui-checked': {
                                                            color: '#fbae19',  
                                                        },
                                                    },
                                                }}
                                            />
                                        }
                                        label="PayPal"
                                    />
                                    
                                </Typography>
                                <Typography variant="body2"
                                sx={{
                                    color:"#fbae19"
                                }}>
                                    <Link
                                        href="###"
                                        sx={{
                                            color: '#fbae19',
                                            textDecoration: 'none',
                                            '&:hover': {
                                                cursor: 'pointer',
                                                textDecoration: 'underline',
                                            },
                                        }}
                                    >
                                        What is Paypal?
                                    </Link>

                                </Typography>
                            </Box>
                      









                             










                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, backgroundColor: '#fbae19', '&:hover': { backgroundColor: '#e59b17' } }}
                            >
                                Checkout
                            </Button>
                        </Box>
                    </Box>
</Box>












</Box>







        </Box>
    </>);
};