import React from 'react';
import svgImg from '../../images/svg/002-sky-3.svg';

class Cloud extends React.Component {
  constructor(props) {
    super(props);
    this.target         = null,
    this.moveType       = 1,
    this.moveNum        = 0,
    this.moveRangeUp    = 240,
    this.moveRangeDown  = 100,
    this.moveDeg        = 0,
    this.moveStyle      = null,
    this.move2Type      = 1,
    this.move2Num       = 0,
    this.move2RangeUp   = 0,
    this.move2RangeDown = 140,
    this.move2Deg       = 0,
    this.move2Style     = null,
    this.setMove        = null,
    this.setMove2       = null
    this._move          = this._move.bind(this);
    this._move2         = this._move2.bind(this);
    this._moveTarget    = this._moveTarget.bind(this);
  }

  componentDidMount() {
    const self = this;
    setTimeout(() => {
      let target    = document.getElementById("cloud").contentDocument;
      let moveStyle = 'translate(125, 0) scale(0.5, 0.5)';
      self.target   = target;
      self._moveTarget(".cloud1", moveStyle); 
      self._moveTarget(".cloud2", moveStyle);

      self._setMove();
      self._setMove2();

      let svg       = document.getElementById("cloud");
      svg.addEventListener("mouseenter", function( event ) { 
       clearInterval(self.setMove);
       clearInterval(self.setMove2);
     }, false);

      svg.addEventListener("mouseleave", function( event ) {  
       self._setMove();
       self._setMove2();
     }, false);
    }, 200)
  }

  _setMove(){
    const self = this;
    self.setMove  =  setInterval(function(){
     self._move();
     self._moveTarget(".cloud1", self.moveStyle);
   }, 10);
  }

  _setMove2(){
    const self = this;
    self.setMove2 =  setInterval(function(){
     self._move2();
     self._moveTarget(".cloud2", self.move2Style);
   }, 10);
  }

  _move(){
    if(this.moveNum === this.moveRangeUp)
    {
      this.moveType  = 1;
    }
    else if(this.moveNum === this.moveRangeDown)
    {
      this.moveType  = -1;
    }

    if(this.moveType === 1)
    {
      this.moveDeg--;
    }
    else if(this.moveType === -1)
    {
      this.moveDeg++;
    }

    this.moveNum   = this.moveDeg*1+125;
    this.moveStyle = 'translate('+ this.moveNum+', 0) scale(0.5, 0.5)'; 
  }

  _move2(){
    if(this.move2Num === this.move2RangeUp)
    {
      this.move2Type  = -1;
    }
    else if(this.move2Num === this.move2RangeDown)
    {
      this.move2Type  = 1;
    }

    if(this.move2Type === -1)
    {
      this.move2Deg--;
    }
    else if(this.move2Type === 1)
    {
      this.move2Deg++;
    }

    this.move2Num   = this.move2Deg*-1+125;
    this.move2Style = 'translate('+this.move2Num +', 0) scale(0.5, 0.5)'; 
  }

  _moveTarget(classTarget, value){
    var settingrun =  this.target.querySelectorAll(classTarget);
    for (var i = 0; i < settingrun.length; i++) {
      settingrun[i].setAttribute('transform',value);
    }
  }


  render() {
    return (
      <object data={svgImg} type="image/svg+xml" id="cloud">
      </object>
      );
    }
  }

  export default Cloud;