export interface IResultProps {
	resultData: {
		title: string;
		partOfSpeech?: string;
		phonetic?: string;
		meaning?: string;
		examples?: string;
	};
}

const Result: React.FC<IResultProps> = ({ resultData }) => {
	return (
		<div className="grid justify-center">
			{resultData.title === "" ? (
				<div></div>
			) : (
				<div className="container bg-gray-200 p-10 rounded md:w-full m-0">
					<h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight">
						{resultData.title}
					</h2>
					<div className="container font-mono italic flex gap-5 mb-4">
						{resultData.partOfSpeech ? (
							<p>{resultData.partOfSpeech}</p>
						) : (
							"Not found"
						)}
						{resultData.phonetic ? <p>{resultData.phonetic}</p> : "Not found"}
					</div>
					<p className="container font-sans text-2xl mb-4">
						{resultData.meaning}
					</p>
					<p>
						{resultData.examples ? (
							<strong className="text-purple-500 container font-sans font-bold text-1xl mb-4">
								{resultData.examples}
							</strong>
						) : (
							<strong className="text-purple-500 container font-sans font-bold text-1xl mb-4">
								There are no examples available
							</strong>
						)}
					</p>
				</div>
			)}
		</div>
	);
};

export default Result;
