import React from 'react';
import svgImg from '../../images/svg/009-rainbow.svg';


class Tree extends React.Component {
	constructor(props) {
		super(props);
		this._runTarget    = this._runTarget.bind(this);
		this.svgImg       = svgImg,
		this.now          = 0,
		this.show         = false,
		this.target       = null,
		this.runStyle     = null,
		this.runType      = 1,
		this.runNum       = 0,
		this.runRangeUp   = 0,
		this.runRangeDown = 1.4,
		this.runDeg       = 0,
		this.tree         = null
	}

	componentDidMount() {
		this._play()
	}


	_play(){
		const self = this;
		setTimeout(function(){
			self.runStyle = 'scale(0)';
			self._runTarget(".apple");
		}, 100);

		setTimeout(function(){
			setInterval(function(){
				self._bigger();
				self._runTarget(".apple")
			}, 30)
		}, 3000);
	}

	_bigger(){
		if(this.runNum < this.runRangeUp)
		{
			this.runType  = 1;
		}
		else if(this.runNum > this.runRangeDown)
		{
			this.runType  = 0;
		}

		if(this.runType === -1)
		{
			this.runDeg = this.runDeg-0.1;
		}
		else if(this.runType === 1)
		{
			this.runDeg = this.runDeg+0.1;
		}
		this.runNum   = this.runDeg;
		this.runStyle = 'scale('+this.runNum+')';
	}


	_runTarget(target){
		this.target = document.getElementById("treeId").contentDocument;
		var apple   = this.target.querySelectorAll(target);
		for (var i = 0; i < apple.length; i++) {
			apple[i].setAttribute('transform-origin', 'center');
			apple[i].setAttribute('transform',this.runStyle);
		}
	}


	_handleScroll() {
		this.now = document.getElementById('app').scrollTop;
	}
	
	_getElementTop(element){
		var navbarheight = 0;
		var actualTop    = element.offsetTop;
		var current      = element.offsetParent;
		while (current !== null){
			actualTop += current.offsetTop;
			current = current.offsetParent;
		}
		return actualTop-navbarheight*2;
	}

	render() {
		return (
			<object  data={svgImg} type="image/svg+xml" id="treeId" className="treeObject">
			</object>
			);
		}
	}

	export default Tree;