import { createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface Comment {
    "id": number,
    "author": string,
    "comment": string,
    "approved": boolean,
    "created_at": string,
    "post": number
}

const comment: Comment = {
    "id": 0,
    "author": "John Doe",
    "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    "approved": true,
    "created_at": "2023-10-05T14:09:00.752691-03:00",
    "post": 1
}

const initialState: Comment[] = [
    comment,
    { ...comment, id: 1, author: 'John Doe 2', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
    { ...comment, id: 2, author: 'John Doe 3', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur.', post: 2 },
    { ...comment, id: 3, author: 'John Doe 4', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
    { ...comment, id: 4, author: 'John Doe 5', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur.', post: 3 },
    { ...comment, id: 5, author: 'John Doe 6', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.', post: 4 },
    { ...comment, id: 6, author: 'John Doe 7', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
    { ...comment, id: 7, author: 'John Doe 8', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum.', post: 2 },
    { ...comment, id: 8, author: 'John Doe 9', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor.', post: 3 },
]

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {}
})

export const selectComments = (state: any) => state.comments
export const selectCommentsByPostId = (state: RootState, postId: number) =>
    state.comments.filter(comment => comment.post === postId)

export default commentsSlice.reducer