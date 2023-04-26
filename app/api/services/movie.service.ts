import { IMovie } from '@/app/utils';
import axios from 'axios';

const client = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	params: { api_key: process.env.NEXT_PUBLIC_API_KEY },
});

export const searchMovies = async (query: string): Promise<IMovie[] | undefined> => {
	try {
		const response = await client.get('/search/movie', {
			params: { query },
		});

		if (response.data && response.data.results) {
			return response.data.results;
		} else {
			console.error('Couldn`t get the data');
		}
	} catch (error) {
		console.error(error);
		return [];
	}
};
