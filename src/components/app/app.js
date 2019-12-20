import React, { Fragment, Component } from 'react'
import Header from '../header/header'
import Content from '../content/content'
import data from '../../goods'

class App extends Component {
		state = {
			quantity: 0,
			items: data,
			itemsCart: [],
			display: 'block'
		}
		onAddItems = (item) =>{
			let itemsCart = this.state.itemsCart
			itemsCart.push(item)
			this.setState({
				quantity: this.state.quantity + 1,
				display: 'none'
			})
		}
		removeItems = (item, indexItem) =>{
			let itemsCart = this.state.itemsCart
			itemsCart.splice(indexItem, 1)
			this.setState({
				quantity: this.state.quantity - 1
			})
		}
		
	render() {
		return (
			<Fragment>
				<Header items={this.state.itemsCart}
						quantity={this.state.quantity}
						removeItems={this.removeItems}/>
				<Content items={this.state.items}
						 onAddItems={this.onAddItems} />
			</Fragment>
		)
	}

}

export default App