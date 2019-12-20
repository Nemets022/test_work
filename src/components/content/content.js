import React, { Component } from 'react'
import './content.sass'

class Content extends Component {
	render() {
		let dataItems = this.props.items.map((item) => {
			const { id, name, img, title, price } = item

			return (
				<div className="col-md-6 col-lg-4 "
					key={id}>
					<div className="card mb-4 mt-4">
						<h3 className="card-header text-center">{name}</h3>
						<img src={`img/${img}`} alt="" />
						<div className="card-body card-wrapper">
							<p className="card-text">{title}</p>
							<p className="card-text">{`Артикул ${id}`}</p>
						</div>
						<div className="card-footer">{`Цена товара: ${price}`}</div>
						<div className="card-body">
							<button className="btn btn-info"
								onClick={this.props.onAddItems.bind(this, item)}>Добавить в корзину</button>
						</div>
					</div>
				</div>
			)
		})
		return (
			<div className="container" >
				<div className="row">
					{dataItems}
				</div>
			</div>
		)
	}

}

export default Content