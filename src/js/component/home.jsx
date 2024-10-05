import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./SecondsCounter"; // Importamos el nuevo componente

const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			<SecondsCounter seconds={0} /> {/* Aquí llamamos al componente con el prop seconds */}
		</div>
	);
};

export default Home;
