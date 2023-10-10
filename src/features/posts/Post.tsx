import { Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import Comments from '../comments/Comments';
import imgTest from './img_test.png';
import { selectPostBySlug } from './postSlice';

export default function Post() {

    const slug = useParams<{ slug: string }>().slug || '';
    const post = useAppSelector((state) => selectPostBySlug(state, slug));
    const postId: number = post?.id ? post.id : 0;

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

                <Comments postId={post?.id ? Number(post.id) : 0} />

            </Grid>
        </Grid>
    )
}
