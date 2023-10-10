import { Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectPosts } from './postSlice'


export default function ListPosts() {
    const posts = useAppSelector(selectPosts);

    const postsList = posts.map((post) => (
        <Grid item xs={12} md={12} key={post.id} sx={{mb: 6}}>
            <Typography variant="caption" component="h2" sx={{ mb: 1 }}>
                {post.category}
            </Typography>
            <Typography variant="h2" component="h1" color="text.secondary" sx={{ mb: 2 }}>
                {post.title}
            </Typography>

            <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>{post.content}</Typography>
            <Typography variant="caption" component="h3" sx={{ mb: 1 }}>
                Autor: {post.author}
            </Typography>
            <Link 
                href="post/{post.slug}" 
                color="secondary"
                sx={{
                    '& .MuiDataGrid-cell:hover': {
                        color: 'primary.main',
                    },
                }}
                >
                Leia mais...
            </Link>
        </Grid>
    ));

    return (
        <Grid container spacing={2} sx={{ paddingTop: 4 }}>
            {postsList}
        </Grid>
    )
}
