import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export interface IInputProps {
	setWord: (value: string) => void;
}

const Input: React.FC<IInputProps> = ({ setWord }) => {
	const [inputWord, setInputWord] = useState<string>("");

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		setWord(inputWord);
		setInputWord("");
	};

	return (
		<div>
			<form className="flex justify-center mb-10" onSubmit={submitHandler}>
				<input
					type="text"
					name="word"
					id="word"
					placeholder="Type a word..."
					className="bg-gray-200 p-3 m-3 appearance-none border-2 border-gray-200 rounded w-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
					onChange={(e) => {
						setInputWord(e.target.value);
					}}
					value={inputWord}
				/>
				<button
					type="submit"
					title="search"
					className="bg-gray-200 p-3 m-3 rounded w-200 hover:bg-purple-500"
				>
					<FaSearch />
				</button>
			</form>
		</div>
	);
};

export default Input;
