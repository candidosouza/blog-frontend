import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useAppSelector } from '../../app/hooks'
import { selectPosts } from './postSlice'
import { Link } from 'react-router-dom';


export default function ListPosts() {
    const posts = useAppSelector(selectPosts);

    function renderTitle(title: string) {
        if (posts.length === 0) {
            return <Typography variant="h1">Nenhum post encontrado</Typography>
        }
        return (
            <Link 
                to="post/{post.slug}" 
                color="secondary"
                style={{ textDecoration: 'none' }}
                >
                <Typography variant="h2" component="h1" color="text.secondary" sx={{ mb: 2 }}>
                    { title }
                </Typography>
            </Link>
        )
    }

    function renderLink(slug: string) {
        if (posts.length >= 0) {
            return (
                <Link 
                    to="post/{slug}"
                    style={{ textDecoration: 'none', color: 'secondary' }}
                    >
                    Leia mais...
                </Link>
            )
        }
    }

    const postsList = posts.map((post) => (
        <Grid item xs={12} md={12} key={post.id} sx={{mb: 6}}>
            <Typography variant="caption" component="h2" sx={{ mb: 1 }}>
                {post.category}
            </Typography>

            
            {renderTitle(post.title)}

            <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>{post.content}</Typography>
            <Typography variant="caption" component="h3" sx={{ mb: 1 }}>
                Autor: {post.author}
            </Typography>
            
            {renderLink(post.slug)}
            
        </Grid>
    ));

    return (
        <Grid container spacing={2} sx={{ paddingTop: 4 }}>
            {postsList}
        </Grid>
    )
}
