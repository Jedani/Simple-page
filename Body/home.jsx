const Home = ({ removeMovie, data }) => {
	return (
		<div>
			<h1 className='header'>Pirates Of The Carribean</h1>
			<article className='parent'>
				{data.map((pirate) => {
					const { id, img, title } = pirate;
					return (
						<section key={id} className='child'>
							<img src={img} alt='' />
							<div>
								<h2>{title}</h2>
							</div>

							<div className=''>
								<button
									type='button'
									className='btn btn-outline-danger'
									onClick={() => removeMovie(id)}>
									Remove Suggestion
								</button>
							</div>
						</section>
					);
				})}
			</article>
		</div>
	);
};

export default Home;
