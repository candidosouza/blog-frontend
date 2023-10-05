import { Box } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
        <Container 
            maxWidth="lg" 
            sx={{
                marginTop: "1rem",
                marginBottom: "1rem",
                color: (theme) => theme.palette.grey[50],
            }}
        >
            {children}
        </Container>
    </Box>
  )
}
