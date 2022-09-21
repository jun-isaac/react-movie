import PropTypes from "prop-types";

function Json({bgImg, download, rating, runtime, genres, year, like, mcImg, title, description}){

	return (
		<div>
		<img src={bgImg} alt={bgImg} />
		<div>
			<div>
				<img src={mcImg} alt={mcImg} />
				<div>
					<h1>{title}</h1>
					<div>
						<span>{year}년 • </span>
						<span>{runtime}분</span>
					</div>
				</div>
			</div>
			<div>
				<div>rate: {rating} </div>
				<div>
					downloed: {download}
				</div>
				<div>
					like: {like} {" "}
				</div>
			</div>
		</div>
		<div>
			<div>{description}</div>
			<div>
				{genres.map((g) => (
					<span key={g}>{g} </span>
				))}
			</div>
		</div>
	</div>
);
}

Json.prototype = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Json;