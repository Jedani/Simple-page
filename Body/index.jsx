import { useEffect, useState } from "react";
import Home from "./home";
import Navbar from "../Navbar/index";

const Homepage = () => {
	const [data, setName] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const removeMovie = (id) => {
		let remove = data.filter((movie) => {
			return movie.id !== id;
		});
		setName(remove);
	};

	useEffect(() => {
		fetch("http://localhost:8000/data")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setName(data);
				setIsLoading(false);
			});
	}, []);
	return (
		<div>
			<Navbar />
			{isLoading && <div>Loading...</div>}
			{data && <Home data={data} removeMovie={removeMovie} />}
		</div>
	);
};

export default Homepage;
