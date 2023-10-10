import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box sx={{ padding: '30px' }}>
        <Typography variant="body2" color="text.secondary" align="center">
            {'© '} Candido Souza 2023 - {new Date().getFullYear()} {' - '} Todos os direitos reservados
        </Typography>
    </Box>
  )
}
