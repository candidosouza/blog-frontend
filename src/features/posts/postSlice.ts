import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

interface Post {
    "id": number,
    "title": string,
    "slug": string,
    "summary": string,
    "content": string,
    "image": null | string,
    "published": boolean,
    "created_at": string,
    "updated_at": string,
    "author": string,
    "category": string
}

const post: Post = {
    "id": 1,
    "title": "Maxime id perferendis nulla minus expedita accusamus.",
    "slug": "maxime-id-perferendis-nulla-minus-expedita-accusamus.",
    "summary": "Est accusamus officiis laborum reiciendis odio iste. Illum aliquam quibusdam in mollitia. Repellendus eveniet quos vitae. Officia veritatis molestiae quam quos repudiandae.",
    "content": "Est accusamus officiis laborum reiciendis odio iste. Illum aliquam quibusdam in mollitia. Repellendus eveniet quos vitae. Officia veritatis molestiae quam quos repudiandae. Est accusamus officiis laborum reiciendis odio iste. Illum aliquam quibusdam in mollitia. Repellendus eveniet quos vitae. Officia veritatis molestiae quam quos repudiandae. Est accusamus officiis laborum reiciendis odio iste. Illum aliquam quibusdam in mollitia. Repellendus eveniet quos vitae. Officia veritatis molestiae quam quos repudiandae.",
    "image": "http://localhost:8000/media/https%3A/placekitten.com/792/454",
    "published": true,
    "created_at": "2023-10-05T14:09:00.752691-03:00",
    "updated_at": "2023-10-05T14:09:00.752703-03:00",
    "author": "Nome do usuário",
    "category": "Nome da categoria"
}

const initialState: Post[] = [
    post,
    { ...post, id: 2, title: 'Maxime id perferendis nulla 2', slug: 'maxime-id-perferendis-nulla-2' },
    { ...post, id: 3, title: 'Maxime id perferendis nulla 3', slug: 'maxime-id-perferendis-nulla-3' },
    { ...post, id: 4, title: 'Maxime id perferendis nulla 4', slug: 'maxime-id-perferendis-nulla-4' },
    { ...post, id: 5, title: 'Maxime id perferendis nulla 5', slug: 'maxime-id-perferendis-nulla-5' },
    { ...post, id: 6, title: 'Maxime id perferendis nulla 6', slug: 'maxime-id-perferendis-nulla-6' },
    { ...post, id: 7, title: 'Maxime id perferendis nulla 7', slug: 'maxime-id-perferendis-nulla-7' }
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export const selectPosts = (state: RootState) => state.posts
export const selectPostBySlug = (state: RootState, slug: string) =>
    state.posts.find(post => post.slug === slug)

export default postSlice.reducer