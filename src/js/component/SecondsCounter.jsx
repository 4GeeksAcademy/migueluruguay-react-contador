import React, { useEffect, useState } from "react";

const SecondsCounter = (props) => {
	const [seconds, setSeconds] = useState(props.seconds);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(prevSeconds => prevSeconds + 1);
		}, 1000); // Ejecuta la función cada 1000 ms (1 segundo)

		return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
	}, []); // El segundo argumento vacío hace que se ejecute solo una vez al cargar

	return (
		<div>
			<h2>{seconds} seconds have passed</h2>
		</div>
	);
};

export default SecondsCounter;
