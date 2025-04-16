import { Box, Typography, Grid } from '@mui/material';
// import { style } from '@mui/system';

const Partner = () => {
    return (
        <Box
            sx={{
                height: { xs: '550px', sm: "300px", md: "200px" },
                width: '100%',
                backgroundImage: 'url(https://lazeapostolski.com/industrial2/img/numbers.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textAlign: 'center',
            }}
        >
            <Grid container spacing={3} alignItems="center" sx={{
                justifyContent: { xs: "center", md: "space-between" },
                // border:"1px solid red ",
                // width:"80%"
                width: {
                    xs: '95%',
                    sm: "600px",
                    md: '900px',
                    lg: '1200px',
                },
                flexDirection: { xs: "column", sm: 'row' },
                gap: { xs: 8, sm: 5, lg: 0 },
            }}>



                <Grid item xs={12} sm={3}>
                    <Typography variant="h5" fontWeight="800" sx={{ mt: 1 }}>
                        <span style={{ color: "#fbae19" }}>
                            We are proud
                        </span>
                        <br />
                        with our achievements
                    </Typography>
                </Grid>


                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: "column", sm: 'row' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: { xs: 5, md: 2, lg: 8 },
                }}>

                    <Grid item xs={12} sm={3}>
                        <Typography
                            fontWeight="500"
                            sx={{ fontSize: { xs: '2.5rem', md: '2.5rem', lg: '3rem' }, color: "#fbae19" }}
                        >
                            265
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '0.8rem', lg: '1rem' } }}>STAFFS ACROSS WORLDWIDE</Typography>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Typography
                            fontWeight="500"
                            sx={{ fontSize: { xs: '2.5rem', md: '2.5rem', lg: '3rem' }, color: "#fbae19" }}
                        >
                            112
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '0.8rem', lg: '1rem' }, }}>AWARDS WINNING</Typography>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Typography
                            fontWeight="500"
                            sx={{ fontSize: { xs: '2.5rem', md: '2.5rem', lg: '3rem' }, color: "#fbae19" }}
                        >
                            359
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '0.8rem', lg: '1rem' } }}>SATISFIED CUSTOMERS</Typography>
                    </Grid>
                </Box>



            </Grid>
        </Box>
    );
};

export default Partner;
