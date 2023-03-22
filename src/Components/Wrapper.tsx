import Input from "./Input";
import Result from "./Result";
import NoResult from "./NoResult";
import { useEffect, useState } from "react";
import axios from "axios";

const Wrapper = () => {
	const [word, setWord] = useState<string>("");
	const [error, setError] = useState<boolean>(false);
	const [resultData, setResultData] = useState({
		title: "",
		partOfSpeech: "",
		phonetic: "",
		meaning: "",
		examples: "",
	});

	const DictionaryData = async () => {
		try {
			const res = await axios.get(
				`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
			);

			setResultData({
				...resultData,
				title: res.data[0].word,
				partOfSpeech: res.data[0].meanings[0].partOfSpeech,
				phonetic: res.data[0].phonetic,
				meaning: res.data[0].meanings[0].definitions[0].definition,
				examples: res.data[0].meanings[0].definitions[0].example,
			});
			setError(false);
		} catch (error) {
			console.error(`No word found, error code: ${error}`);
			setError(true);
		}
	};

	useEffect(() => {
		if (!word) {
			return;
		}
		DictionaryData();
	}, [word]);

	return (
		<div>
			<Input setWord={setWord} />
			{!error ? <Result resultData={resultData} /> : <NoResult />}
		</div>
	);
};

export default Wrapper;
