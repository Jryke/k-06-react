import React from 'react'
import '../styles/Thumbnail.css'

class Thumbnail extends React.Component {

	toggleLikedClass = () => {
		return this.props.place.liked ? 'liked' : ''
	}

	render() {
		return (
			<div className='thumbnail'>
				<span>{this.props.place.title} </span>
				<span>{this.props.place.price} </span>
				<span>{this.props.place.location} </span>
				<button className={this.toggleLikedClass()} onClick={() => this.props.toggleLike(this.props.place.title)}>Like</button>
			</div>
		)
	}
}

export default Thumbnail
