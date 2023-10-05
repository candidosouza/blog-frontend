import { createSlice } from "@reduxjs/toolkit"

interface Category {
    "id": number,
    "name": string,
    "slug": string,
    "image": null|string,
    "is_active": true,
    "created_at": string,
    "updated_at": string
}

const category: Category = {
    "id": 1,
    "name": "Beverages",
    "slug": "beverages",
    "image": null,
    "is_active": true,
    "created_at": "2021-02-20T11:28:10.000000Z",
    "updated_at": "2021-02-20T11:28:10.000000Z"
}

const initialState: Category[] = [
    category,
    {...category, id: 2, name: 'Food', slug: 'food'},
    {...category, id: 3, name: 'Snacks', slug: 'snacks'},
    {...category, id: 4, name: 'Vegetables', slug: 'vegetables'},
    {...category, id: 5, name: 'Fruits', slug: 'fruits'},
    {...category, id: 6, name: 'Meat', slug: 'meat'},
    {...category, id: 7, name: 'Fish', slug: 'fish'}
]

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {}
});
