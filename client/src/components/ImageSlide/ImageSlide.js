import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import './ImageSlide.css';
import Lightbox from 'react-image-lightbox';
import ImageSlideContent from './ImageSlideContent';
import SlideButton from './SlideButton';
import ZoomModal from './ZoomModal';

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false
};

class ImageSlide extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: 0,
			isOpenLightBox: false,
			photoIndex: 0
		}
		this.handleNext = this.handleNext.bind(this);
		this.handlePrev = this.handlePrev.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleOpenLightBox = this.handleOpenLightBox.bind(this);
	}

	handleNext() {
		this.slide.slickNext();
	}

	handlePrev() {
		this.slide.slickPrev();
	}

	handleChange(index) {
		this.setState({
			currentIndex: index
		});
	}

	handleOpenLightBox() {
		this.setState({
			photoIndex: this.state.currentIndex,
			isOpenLightBox: true
		});
	}

	render() {
		const { photoIndex } = this.state;
		const { images } = this.props;
		return (
			<div className="imageSlide">
				<Slider {...settings} ref={c => this.slide = c}
					afterChange={this.handleChange}
					dots={true}
					dotsClass="dotSlide"
				>
					{
						images.map((url, key) => (
							<div key={key}>
								<ImageSlideContent url={url} />
							</div>
						))
					}
				</Slider>
				<SlideButton
					onNextClick={this.handleNext}
					onPrevClick={this.handlePrev}
				/>
				<ZoomModal
					onClick={this.handleOpenLightBox}
				/>
				{
					this.state.isOpenLightBox && 
					<Lightbox 
						mainSrc={images[photoIndex]}
						nextSrc={images[(photoIndex + 1) % images.length]}
						prevSrc={images[(photoIndex + images.length - 1) % images.length]}
						onCloseRequest={() => this.setState({ isOpenLightBox: false })}
						onMovePrevRequest={() => this.setState({
							photoIndex: (photoIndex + images.length - 1) % images.length,
						})}
						onMoveNextRequest={() => this.setState({
							photoIndex: (photoIndex + 1) % images.length,
						})}
					/>
				}
			</div>
		)
	}
}

export default ImageSlide;
