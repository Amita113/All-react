//importing useRef
import { useRef } from 'react';

function Userefone(){

	//creating a ref
	const ref1 = useRef();
	// Styling the element
	const handleClick = () => {
		ref1.current.style.backgroundColor = 'black';
		ref1.current.style.padding = '3rem';
		ref1.current.style.color = 'white';
		ref1.current.style.width = '150px';
		ref1.current.style.height = '150px';
		ref1.current.style.margin = '50px';
		ref1.current.style.borderRadius = '10px';
	};

	return (
		<div>
			<h2>This is ref hook </h2>
			<button onClick={handleClick}>
				Enable dark mode
			</button>

			<br />
			<br />

			{/* Passing the ref to the DOM element ,
				we wish to style */}
			<div ref={ref1}> Styling an element
				using useRef hook in React</div>
		</div>
	);
};

export default Userefone;
