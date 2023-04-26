/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';

interface MovieCardProps {
	title: string;
	overview: string;
	posterPath: string;
}

const MovieCard: FC<MovieCardProps> = ({ title, overview, posterPath }) => {
	const imageUrl: string = posterPath ? `http://image.tmdb.org/t/p/w500${posterPath}` : '';

	console.log(111);
	return (
		<div className="bg-white rounded shadow p-4">
			<img className="w-full h-64 rounded mb-4" src={imageUrl} alt="" />
			<h2 className="text-2xl font-bold mb-2">{title}</h2>
			<p className="text-sm text-gray-500">{overview.substring(0, 150)}</p>
		</div>
	);
};

export default MovieCard;
