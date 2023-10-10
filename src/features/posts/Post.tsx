import { Box, Grid, Typography } from '@mui/material';
import { CommentForm } from './components/commentForm';
import imgTest from './img_test.png';

export default function Post() {
    return (
        <Grid container spacing={2} sx={{ paddingTop: 4 }}>
            <Grid item xs={12} md={12} sx={{ mb: 6 }}>

                <Typography variant="h2" component="h1" color="text.secondary" sx={{ mb: 4 }}>
                    A expressão Lorem ipsum em design gráfico e editoração
                </Typography>

                <Typography variant="caption" component="h3" sx={{ mb: 1 }}>
                    Escrito por: Candido Souza <br />
                    Categoria: Algoritmos
                </Typography>


                <Typography variant="body1" color="text.primary" sx={{ mt: 4, mb: 4 }}>
                    A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações (jornais, revistas, e sites) para testar e ajustar aspectos visuais (layout, tipografia, formatação, etc.) antes de utilizar conteúdo real. Também é utilizado em catálogos tipográficos, para demonstrar textos e títulos escritos
                </Typography>

                <img src={imgTest} alt="Imagem do post" style={{ minWidth: '100%' }} />

                <Typography variant="body1" color="text.primary" sx={{ mt: 4, mb: 4 }}>
                    A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações (jornais, revistas, e sites) para testar e ajustar aspectos visuais (layout, tipografia, formatação, etc.) antes de utilizar conteúdo real. Também é utilizado em catálogos tipográficos, para demonstrar textos e títulos escritos
                    A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações (jornais, revistas, e sites) para testar e ajustar aspectos visuais (layout, tipografia, formatação, etc.) antes de utilizar conteúdo real. Também é utilizado em catálogos tipográficos, para demonstrar textos e títulos escritos. A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações (jornais, revistas, e sites) para testar e ajustar aspectos visuais (layout, tipografia, formatação, etc.) antes de utilizar conteúdo real. Também é utilizado em catálogos tipográficos, para demonstrar textos e títulos escritos
                    A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações (jornais, revistas, e sites) para testar e ajustar aspectos visuais (layout, tipografia, formatação, etc.) antes de utilizar conteúdo real. Também é utilizado em catálogos tipográficos, para demonstrar textos e títulos escritos
                    A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações (jornais, revistas, e sites) para testar e ajustar aspectos visuais (layout, tipografia, formatação, etc.) antes de utilizar conteúdo real. Também é utilizado em catálogos tipográficos, para demonstrar textos e títulos escritos
                </Typography>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" component="h3" color="text.secondary" sx={{ mb: 4 }}>
                        Deixe seu comentário
                    </Typography>

                    <CommentForm />

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
