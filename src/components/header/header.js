import React, { Component, Fragment } from 'react'
import './header.sass'

class Header extends Component {
	state = {
		modal: false
	}
	showModal = () => {
		this.setState({
			modal: true
		})
		console.log(this.content)
	}
	closeModal = () => {
		this.setState({
			modal: false
		})
	}
	render() {
		let style = {
			display: 'display: none'
		}
		if (this.state.modal) {
			style.display = 'block'
		} else style.display = 'none'

		let dataItems = this.props.items.map((item) => {
			const { id, name, img, price } = item
			if(id === this.key){
				console.log('12')
			}
			return (
					<div className="cart"
						key={id}>
						<div>
							<h4>Товар</h4>
							<img src={'img/'+img} alt="" />
						</div>
						<div>
							<h4>Наименование</h4>
							<p>{name}</p>
						</div>
						<div>
							<h4>Цена</h4>
							<p>{price}</p>
						</div>
						<div>
							<h4>Кол-во</h4>
							<p>0</p>
						</div>
						<div>
						<button className="btn btn-success"
								onClick={this.props.removeItems.bind(this, id)}>Удалить</button>
						</div>
						
					</div>
			)
		})

		return (
			<Fragment>
			<div>
				<div className="modal"
					style={style}>
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Корзина</h5>
								<button className="close"
									onClick={this.closeModal}>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								{dataItems}
								{this.props.quantity === 0 ? 'Ваша корзина пуста!' : ''}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="Header navbar navbar-dark bg-dark">
				<div className="col-6">
					<span className="text-white pr-4">Тестовое задание</span>
					<span>Главная</span>
				</div>
				<div>
					<span className="mr-3 text-white">({this.props.quantity})</span>
					<button className="btn btn-secondary"
						onClick={this.showModal}>Корзина</button>
				</div>
			</div>
			</Fragment>
			)
	}
}


export default Header