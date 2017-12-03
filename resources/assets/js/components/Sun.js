import React from 'react';
import svgImg from '../../images/svg/sun-2.svg';

class Sun extends React.Component {
	constructor(props) {
		super(props);
		this.runDeg        = 0,
		this.moveType      = 0,
		this.moveNum       = 0,
		this.moveRangeUp   = 40,
		this.moveRangeDown = 10,
		this.moveDeg       = 0,
		this.runStyle      = null,
		this.moveStyle     = null,
		this._runTarget    = this._runTarget.bind(this);
		this._moveTarget   = this._moveTarget.bind(this);
	}

	componentDidMount() {
		const self = this;
		setInterval(function(){
			self._run();
			self._runTarget();
		}, 50);
		setInterval(function(){
			self._move();
			self._moveTarget();
		}, 20);
	}

	_run(){
		this.runDeg++;
		this.runStyle = 'rotate('+this.runDeg+'  256 256)';
		this.runDeg   = (this.runDeg === 360) ? 0 : this.runDeg;
	}

	_runTarget(){
		var target     =  document.getElementById("sun2").contentDocument;
		var settingrun =  target.querySelectorAll(".settingrun");
		for (var i = 0; i < settingrun.length; i++) {
			settingrun[i].setAttribute('transform',this.runStyle);
		}
	}

	_move(){
		if(this.moveNum === this.moveRangeUp)
		{
			this.moveType  = -1;
		}
		else if(this.moveNum === this.moveRangeDown)
		{
			this.moveType  = 1;
		}

		if(this.moveType === -1)
		{
			this.moveDeg--;
		}
		else
		{
			this.moveDeg++;
		}

		this.moveNum   = this.moveDeg;
		this.moveStyle = 'translate(0,'+this.moveNum+')';
	}

	_moveTarget(){
		var target     =  document.getElementById("sun2").contentDocument;
		var settingrun =  target.querySelectorAll(".mouth");
		for (var i = 0; i < settingrun.length; i++) {
			settingrun[i].setAttribute('transform',this.moveStyle);
		}
	}

	render() {
		return (
			<object data={svgImg} type="image/svg+xml" id="sun2">
			</object>
			);
		}
	}

	export default Sun;