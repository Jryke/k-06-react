import React from 'react'
import '../styles/Thumbnail.css'

class Thumbnail extends React.Component {
	state = {
		place: this.props.place,
	}

	render() {
		return (
			<div className='thumbnail'>
				<span>{this.props.place.title} </span>
				<span>{this.props.place.price} </span>
				<span>{this.props.place.location} </span>
				<button onClick={this.toggleLike}>Like</button>
			</div>
		)
	}
}

export default Thumbnail