import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material';

const testimonials = [
    { name: 'John Doe', text: 'Fantastic work and professional communication!' },
    { name: 'Emily Rose', text: 'I loved the dedication and quality of delivery!' },
    { name: 'Carlos Vega', text: 'Fast, efficient, and on point.' },
    { name: 'Mina Kwon', text: 'Highly recommended team and workflow.' },
];

const Testimonial4 = () => {
    const [index, setIndex] = useState(0);
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.down('md'));

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const getCardWidth = () => {
        if (isSm) return '90%';
        if (isMd) return '70%';
        return '50%';
    };

    return (
        <Box sx={{ width: '100%', textAlign: 'center', py: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
                <Button onClick={handlePrev} variant="contained">Prev</Button>
                <Button onClick={handleNext} variant="contained">Next</Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', px: 2 }}>
                <Card sx={{ width: getCardWidth(), p: 2 }}>
                    <CardContent>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            "{testimonials[index].text}"
                        </Typography>
                        <Typography variant="subtitle1" fontWeight="bold">
                            - {testimonials[index].name}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default Testimonial4;
