import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

interface SearchBarProps {
	onSearch: (query: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
	const [query, setQuery] = useState<string>('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setQuery(e.target.value);
	};

	const handleSumbit = (e: FormEvent): void => {
		e.preventDefault();
		onSearch(query);
	};

	return (
		<form onSubmit={handleSumbit} className="flex items-center w-screen max-w-3xl">
			<input
				type="text"
				className="border border-gray-300 rounded py-2 px-4 w-full fovus:outline-none focus:border-blue-500"
				value={query}
				onChange={handleChange}
			/>
			<button
				type="submit"
				className="bg-red-600 text-white py-2 px-6 m-3 rounded hover:bg-blue-400 focus:outline-none"
			>
				Search
			</button>
		</form>
	);
};
