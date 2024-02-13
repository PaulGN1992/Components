import '../components/CardFlipped.css'
import { useRef } from 'react';

export default function CardFlipped () {

		let cardRef = useRef(null);
		
		function flipCard() {
			setTimeout(function () {
			cardRef.current.classList.toggle('card-flipped');
		},10 ) }
	return (

	<div className="card" ref={cardRef} onClick={()=>flipCard()}>
		<div className="card-front text-green-600">
				
			<p>Contenido de la tarjeta</p>
		</div>
		<div className="card-back">
					
			<img src="/pb-fNegro-02.svg" alt="Imagen"/>
		</div>
		
	</div>
		
	)
					
}