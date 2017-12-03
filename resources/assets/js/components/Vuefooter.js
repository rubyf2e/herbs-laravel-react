import React from 'react';
import svgImg from '../../images/svg/ruby.svg';

class Footer extends React.Component {
  render() {
    return (
			<div className="footer borderbox">
				<div className="container">
					<div className="title">
						<span>Designed by Ruby</span>
						<div className="icon">
							<img src={svgImg}/>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default Footer;
