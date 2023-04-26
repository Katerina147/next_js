'use client';
import { searchMovies } from '@/app/api/services/movie.service';
import { FC, useState } from 'react';
import MovieCard from '../MovieCard';
import { SearchBar } from '../SearchBar';
import { IMovie } from '@/app/utils';

const MovieSearch: FC = () => {
	const [movies, setMovies] = useState<IMovie[] | undefined>([]);

	const handleSearch = async (query: string): Promise<void> => {
		const results: IMovie[] | undefined = await searchMovies(query);
		setMovies(results);
	};

	return (
		<div>
			<SearchBar onSearch={handleSearch} />
			<div className="grid grid-cols-5 gap-8 mt-8">
				{movies?.map((movie: IMovie) => {
					console.log(movie);
					return (
						<MovieCard key={movie.id} title={movie.title} overview={movie.overview} posterPath={movie.poster_path} />
					);
				})}
			</div>
		</div>
	);
};

export default MovieSearch;
