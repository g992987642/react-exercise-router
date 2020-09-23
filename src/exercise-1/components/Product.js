import React, {Component} from 'react';
import jsonData from '../../exercise-2/mockups/data';

class Product extends Component {

  render() {
	const id=this.props.match.params.id;
	const product=Object.values(jsonData).filter(e=>e.id==id)[0];
	console.log(product)
	return (
		<div className='product-item'>
		  <p>Product Details</p>
			{
			  Object.keys(product).map(key=>
				<p key={key}> {key}: {product[key]}</p>
			  )
			}
		  <p>URL:/products/{id}</p>
		</div>
	);
  }
}

export default Product;