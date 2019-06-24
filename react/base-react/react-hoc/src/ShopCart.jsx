import React, { component } from 'react';
import WithLogin from './WithLogin';

@withLogin
class ShopCart extends React.Component {
  render() {
    const { a, b } = this.props;
    return (
      <ul>
        <li>{a}</li>
        <li>{b}</li>
        <li>手机</li>
        <li>平板</li>
      </ul>
    );
  }
}
ShopCart.displayName = 'ShopCart';
export default ShopCart;