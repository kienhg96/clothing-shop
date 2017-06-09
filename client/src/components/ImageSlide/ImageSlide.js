import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import './ImageSlide.css';
import Icon from '../Icon';
import Lightbox from 'react-image-lightbox';

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false
};

const ImageSlideContent = ({url}) => (
	<div className="imageSlideContent" style={{
		background: `url(${url})`
	}}>
	</div>
)

const url1 = "https://cdn.shopify.com/s/files/1/0739/8127/products/1-1_f5ddcf48-4188-4472-8d2c-b703c1265783_1920x.jpg";
const url2 = 'https://cdn.shopify.com/s/files/1/0739/8127/products/2-2_1920x.jpg';
const url3 = 'https://cdn.shopify.com/s/files/1/0739/8127/products/2-1_6852cff7-43d8-474b-847e-d96ddf25adca_1920x.jpg';
const url4 = 'https://cdn.shopify.com/s/files/1/0739/8127/products/6-1_2132a94c-513b-4d32-9db7-c36a81d7c9d5_1920x.jpg';

const images = [
	url1, url2, url3, url4
];

const FlatButton = ({content, onClick}) => (
	<span className="slideButton" onClick={onClick}>
		{content}
	</span>
);

const SlideButton = ({onNextClick, onPrevClick, maxIndex, currentIndex}) => (
	<div className="slideButtonContainer">
		<FlatButton
			content={<Icon icon="fa-arrow-left" />}
			onClick={onPrevClick}
		/>
		<FlatButton
			content={<Icon icon="fa-arrow-right" />}
			onClick={onNextClick}
		/>
	</div>
);

const ZoomModal = ({onClick}) => (
	<div className="zoomModalContainer">
		<FlatButton
			content={<Icon icon="fa-arrows-alt" />}
			onClick={onClick}
		/>
	</div>
)

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
