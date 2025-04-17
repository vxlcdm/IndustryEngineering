import React from 'react';
import { Box, Card, Typography, useTheme, useMediaQuery } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const features = [
    {
        title: 'Worldwide Provider',
        description:
            'Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt in ut dui. Quisque quis augue placerat, pulvinar dui aliquam, convallis sapien. Orci varius natoque penaticursus egestas.',
        icon: <PublicIcon sx={{ fontSize: 60 }} />,
    },
    {
        title: 'Fast Delivery',
        description:
            'Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt in ut dui. Quisque quis augue placerat, pulvinar dui aliquam, convallis sapien. Orci varius natoque penaticursus egestas.',
        icon: <LocalShippingIcon sx={{ fontSize: 60 }} />,
    },
    {
        title: 'Frendly Support',
        description:
            'Fusce non faucibus lorem. Cras eu velit id diam cursus tincidunt in ut dui. Quisque quis augue placerat, pulvinar dui aliquam, convallis sapien. Orci varius natoque penaticursus egestas.',
        icon: <SupportAgentIcon sx={{ fontSize: 60 }} />,
    },
];

const Hover3 = () => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.down('md'));

    const getWidth = () => {
        if (isSm) return '100%';
        if (isMd) return '48%';
        return '32%';
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'center',
                px: 2,
            }}
        >
            {features.map((item, idx) => (
                <Card
                    key={idx}
                    sx={{
                        backgroundColor: '#eee',
                        borderRadius: 0,
                        p: 3,
                        width: getWidth(),
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        boxShadow: 2,
                    }}
                >
                    {item.icon}
                    <Typography variant="h6" fontWeight="bold" mt={2} mb={1}>
                        {item.title}
                    </Typography>
                    <Typography variant="body2">{item.description}</Typography>
                </Card>
            ))}
        </Box>
    );
};

export default Hover3;
