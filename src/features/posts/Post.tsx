import { Box, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import imgTest from './img_test.png';
import { selectPostBySlug } from './postSlice';

export default function Post() {

    const slug = useParams<{ slug: string }>().slug || '';
    const post = useAppSelector((state) => selectPostBySlug(state, slug));

    return (
        <Grid container spacing={2} sx={{ paddingTop: 4 }}>
            <Grid item xs={12} md={12} sx={{ mb: 6 }}>

                <Typography variant="h2" component="h1" color="text.secondary" sx={{ mb: 4 }}>
                    {post?.title}
                </Typography>

                <Typography variant="caption" component="h3" sx={{ mb: 1 }}>
                    {post?.author ? `Escrito por: ${post?.author}` : ''}
                    <br />
                    {post?.category ? `Categoria: ${post?.category}` : ''}
                </Typography>

                <Typography variant="body1" color="text.primary" sx={{ mt: 4, mb: 4 }}>
                    {post?.summary}
                </Typography>

                <img src={imgTest} alt="Imagem do post" style={{ minWidth: '100%' }} />

                <Typography variant="body1" color="text.primary" sx={{ mt: 4, mb: 4 }}>
                    {post?.content}
                </Typography>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" component="h3" color="text.secondary" sx={{ mb: 4 }}>
                        Deixe seu comentário
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h4" component="h3" color="text.secondary" sx={{ mb: 4 }}>
                        Comentários
                    </Typography>
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="caption" component="h3" sx={{ mb: 1 }}>
                            Candido Souza <br />
                            10/10/2021
                        </Typography>
                        <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
                            A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="caption" component="h3" sx={{ mb: 1 }}>
                            Candido Souza <br />
                            10/10/2021
                        </Typography>
                        <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
                            A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações
                        </Typography>
                    </Box>
                </Box>

            </Grid>
        </Grid>
    )
}
