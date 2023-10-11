"use client"
import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonComponent() {
    return (
        <div>
            <Box sx={{ width: 3000 }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
        </div>
    );
}
