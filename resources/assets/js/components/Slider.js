import React from 'react';
import Slider from 'react-slick';

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[]
    }

  }

  componentWillMount(){
    this._fetchApi();
  }

  _fetchApi(){
    fetch("http://localhost:3000/api/sliders", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then((response) => response.json()
    .catch(err => {
      console.err(`'${err}' happened!`);
      return {};
    }))
    .then((json) => {
      this.setState({list:json})
    })
    .catch((err) => { console.log('fetch request failed: ', err) }
      )
  }

  _renderItems() {
    return this.state.list.map((item, i) => {
      let divStyle = {
        backgroundImage: 'url(' + item.src + ')',
      };
      return (
        <div key={i} style={divStyle}>
        <div className="mask">
        <object id="words" data="images/title.svg" type="image/svg+xml">
        </object>
        </div>
        </div>
        );
      });
    }

    render() {
     const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000
    };

    var value = this._renderItems();
    return (
    <Slider {...settings} className="container slide">
    {value}
    </Slider>
    );
  }
}


export default SimpleSlider;





//   const self = this;
//   setTimeout(() => {
//     self.target     =  document.getElementById("words").contentDocument;
//     self.targetSvg  =  self.target.querySelector("svg");
//     self.targetPath =  self.targetSvg.querySelectorAll("path");
//     setTimeout(() => {
//       self.words();
//     }, 100)
//   }, 200)
// },

// methods: {
//   getRandom(min, max){
//     return Math.random() * (max - min) + min;
//   },
//   words(){
//     const self = this;
//     for (var i = 0; i < this.targetPath.length; i++) {
//       this.targetPath[i].setAttribute('stroke', '#FFFFFF');
//     }

//     var tmax_optionsGlobal = {
//       repeat: -1,
//       repeatDelay: 1,
//       yoyo: true
//     };

//     var tl = new TimelineMax(tmax_optionsGlobal),
//     path        = 'svg *',
//     stagger_val = 0.08,
//     duration    = 1;

//     $.each(this.targetPath, function(i, el) {
//       tl.set($(this), {
//         x: '+=' + self.getRandom(-500, 500),
//         y: '+=' + self.getRandom(-500, 500),
//         rotation: '+=' + self.getRandom(-720, 720),
//         scale: 0,
//         opacity: 0
//       });
//     });

//     var stagger_opts_to = {
//       x: 0,
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       rotation: 0,
//       ease: Power4.easeInOut
//     };

//     tl.staggerTo(this.targetPath, duration, stagger_opts_to, stagger_val);

//     var $svg = $(this.targetSvg);
//     $svg.hover(
//       function() {
//         tl.timeScale(0.3);
//       },
//       function() {
//         tl.timeScale(1.5);
//       });
//   }
// }
// }
// </script>
