import axios from 'axios';
import env from './../env';
import type { WP_REST_API_Posts } from 'wp-types'
import { writable } from 'svelte/store'

export const posts = writable<WP_REST_API_Posts>([])

export const getPosts: () => Promise<WP_REST_API_Posts> = async () => {
    const response = await axios.get(`${env.API_URL}/wp-json/wp/v2/posts`);
    const data = response.data;
    return data;
}