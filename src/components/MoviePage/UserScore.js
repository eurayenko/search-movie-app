import React from 'react';
import classes from './userScore.module.css';

class UserScore extends React.Component {
	constructor(){
		super();
		this.scoreEl = React.createRef();
		this.scoreBg = React.createRef();
	}

	// componentDidMount() {
	// 	let scorePer = this.props.score * 10;
	// 	let getRadians = (degree) => {
	// 		return Math.PI / 180 * (degree - 90);
	// 	}
	// 	let canvasBg = this.scoreBg.current,
	// 		canvasSc = this.scoreEl.current,
	// 		ctxBg = canvasBg.getContext('2d'),
	// 		ctxSc = canvasSc.getContext('2d'),
	// 		xc = canvasBg.width / 2,
	// 		yc = canvasBg.height /2,
	// 		scoreAngle = 0,
	// 		endScoreAngle = (scorePer * 100) / 360;
	// 	console.log(endScoreAngle);	
	// 	ctxBg.arc(xc,yc,32.5, 0, 2 * Math.PI ,false);
	// 	ctxBg.fillStyle = ('#081c22');
	// 	ctxBg.fill();
	// 	ctxBg.beginPath();
	// 	ctxBg.lineWidth = 6;
	// 	ctxBg.strokeStyle = 'rgba(1,210,119,0.25)';
	// 	ctxBg.arc(xc,yc,25, 0, 2 * Math.PI,false);
	// 	ctxBg.stroke();	
	// 	ctxBg.font = "20px Arial";
	// 	ctxBg.fillStyle = "white";
	// 	ctxBg.fillText(scorePer, xc - 15, yc + 8);
	// 	ctxBg.font = "12px Arial";
	// 	ctxBg.fillStyle = "white";
	// 	ctxBg.fillText("%", xc + 8, yc);
	// 	let drawScore = () => {
	// 		ctxSc.clearRect(0, 0, canvasSc.width, canvasSc.height);
	// 		ctxSc.beginPath();
	// 		ctxSc.lineWidth = 6;
	// 		ctxSc.strokeStyle = '#21d079';
	// 		ctxSc.arc(xc,yc,25, 4.71, getRadians(scoreAngle),false);
	// 		ctxSc.stroke();
	// 		scoreAngle++;
	// 		if (scoreAngle == endScoreAngle) {
	// 			clearInterval(intervalID);
	// 		}
	// 	}
	// 	let intervalID = setInterval(drawScore, 1);
	// }

	componentDidUpdate() {
		console.log(this.props.score);
		let scorePer = this.props.score * 10;
		let getRadians = (degree) => {
			return Math.PI / 180 * (degree - 90);
		}
		let canvasBg = this.scoreBg.current,
			canvasSc = this.scoreEl.current,
			ctxBg = canvasBg.getContext('2d'),
			ctxSc = canvasSc.getContext('2d'),
			xc = canvasBg.width / 2,
			yc = canvasBg.height /2,
			scoreAngle = 0,
			endScoreAngle = (scorePer * 360) / 100;
		console.log(endScoreAngle);	
		ctxBg.arc(xc,yc,32.5, 0, 2 * Math.PI ,false);
		ctxBg.fillStyle = ('#081c22');
		ctxBg.fill();
		ctxBg.beginPath();
		ctxBg.lineWidth = 6;
		ctxBg.strokeStyle = 'rgba(1,210,119,0.25)';
		ctxBg.arc(xc,yc,25, 0, 2 * Math.PI,false);
		ctxBg.stroke();	
		ctxBg.font = "20px Arial";
		ctxBg.fillStyle = "white";
		ctxBg.fillText(scorePer, xc - 15, yc + 8);
		ctxBg.font = "12px Arial";
		ctxBg.fillStyle = "white";
		ctxBg.fillText("%", xc + 8, yc);
		let drawScore = () => {
			ctxSc.clearRect(0, 0, canvasSc.width, canvasSc.height);
			ctxSc.beginPath();
			ctxSc.lineWidth = 6;
			ctxSc.strokeStyle = '#21d079';
			ctxSc.arc(xc,yc,25, 4.71, getRadians(scoreAngle),false);
			ctxSc.stroke();
			scoreAngle++;
			if (scoreAngle > endScoreAngle) {
				clearInterval(intervalID);
			}
		}
		let intervalID = setInterval(drawScore, 1);
	}

	render() {
		return (
			<div className={classes.wrapper}>
				<canvas height="70" width="70" ref={this.scoreEl} className={classes.scoreBar}></canvas>
				<canvas height="70" width="70" ref={this.scoreBg}></canvas>
			</div>
		);
	}
}

export default UserScore;
