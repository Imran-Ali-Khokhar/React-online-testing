import React from 'react'

function Test(props){
	return(
		<div>
			<p>{props.question}</p>
			<span style={{display: !props.option1 && "none"}}>
				<input type='checkbox'/>
				{props.option1}
			</span>
			<br />
			<span style={{display: !props.option2 && "none"}}>
				<input type='checkbox'/>
				{props.option2}
			</span>
			<br />
			<span style={{display: !props.option3 && "none"}}>
				<input type='checkbox'/>
				{props.option3}
			</span>
			<br />
			<span style={{display: !props.option4 && "none"}}>
				<input type='checkbox'/>
				{props.option4}
			</span>
			<br />
			<span style={{display: !props.option5 && "none"}}>
				<input type='checkbox'/>
				{props.option5}
			</span>
			<hr />
		</div>
	)
}

export default Test