import React, { Component } from 'react';
import './App.css';
import Layout from './components/FullLayout'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      cartTotal: 0,
    }
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  addToTotal() {
    let total = 0;
    let cartItems = this.state.cartItems;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price * parseFloat(cartItems[i].quantity);
    }
    // 1.
    this.setState({ cartTotal: `£${total}` })
  }

  subtractFromTotal() {
    let total = 0;
    let cartItems = this.state.cartItems;
    for (let i = 0; i < cartItems.length; i++) {
      total -= cartItems[i].price * parseInt(cartItems[i].quantity);
    }
    // 2.
    this.setState({ cartTotal: `£${Math.abs(total)}` })
  }

  addCartItems = (items) => {
    const cartItems = [...this.state.cartItems];
    let itemExists = false;

    cartItems.forEach(item => {
      if (item.id === items.id) {
        itemExists = true;
        item.quantity = item.quantity += 1;
      }
    })

    if (!itemExists) {
      cartItems.push(items);
    }

    this.addToTotal(cartItems)

    // 3.
    // this.setState(prevState => ({
    //     cartItems:cartItems
    // }), { cartItems })
    this.setState({ cartItems });
  }

  removeCartItems = (itemToRemove) => {
    const currentCart = [...this.state.cartItems];


    for (var i = 0; i < currentCart.length; i++) {
      if (currentCart[i].id === itemToRemove.id) {
        currentCart[i].quantity--;
      }

      if (currentCart[i].quantity < 1) {
        currentCart.splice(i, 1);
      }

    }

    this.subtractFromTotal(currentCart);

    // .4
    this.setState({ cartItems: currentCart })
  }

  clearAll = () => {
    // 5.
    this.setState({ cartItems: [] });
    this.setState({ cartTotal: `£${0.00}` });
  };

  render() {
    let id = 0;
    // Use dummy data.
    function createData(name, price, fat, carbs, protein, quantity) {
      id += 1;
      return { id, name, price, fat, carbs, protein, quantity };
    }

    const products = [
      createData('Frozen yoghurt', 10, 6.0, 24, 4.0, 0),
      createData('Ice cream sandwich', 20, 9.0, 37, 4.3, 0),
      createData('Eclair', 30, 16.0, 24, 6.0, 0),
      createData('Cupcake', 40, 3.7, 67, 4.3, 0),
      createData('Gingerbread', 50, 16.0, 49, 3.9, 0),
    ];

    return (
      <div className="App">
        <header className="App-header">
          <Layout addCartItems={this.addCartItems} removeCartItems={this.removeCartItems}
            products={products} cartItems={this.state.cartItems} clearAll={this.clearAll} currentTotal={this.state.cartTotal} />
        </header>
      </div>
    );
  }
}

export default App;
