
import {
    Box,
    Button,
    FormControl,
    Grid,
    TextField,
} from "@mui/material";

type Props = {
}

export function CommentForm({}) {

    return (
        <Box>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField
                                required
                                name="name"
                                label="Nome"
                                variant="standard"
                                placeholder="Digite seu nome"
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField
                                required
                                name="email"
                                label="E-mail"
                                variant="standard"
                                placeholder="Digite seu e-mail"
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField
                                required
                                name="content"
                                label="Comentário"
                                variant="standard"
                                multiline
                                minRows={4}
                                placeholder="Escreva seu comentário aqui..."
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <Box display="flex" gap={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Enviar
                            </Button>
                        </Box>
                    </Grid>


                </Grid>
            </form>
        </Box>
    )
}
