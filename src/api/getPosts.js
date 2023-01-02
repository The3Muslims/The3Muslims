import axios from 'axios';
import env from './../env';
import { writable } from 'svelte/store';
export const posts = writable([]);
export const getPosts = async () => {
    const response = await axios.get(`${env.API_URL}/wp-json/wp/v2/posts`);
    const data = response.data;
    return data;
};
//# sourceMappingURL=getPosts.js.map