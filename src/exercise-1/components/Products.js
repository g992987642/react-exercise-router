import React, {Component} from 'react';
import jsonData from '../../exercise-2/mockups/data';
import {Link} from 'react-router-dom'

class Products extends Component {
  render() {
	return (
		<div className='products'>
			<p>All Products</p>
		  <div className='product-list'>
			{
			  Object.keys(jsonData).map(key=>{
			    return <div className={`product-${key}`} key={key}>
			    <Link to={`/products/${jsonData[key].id}`}>{key}</Link>
			    </div>
			  })
			}

		  </div>
		</div>
	);
  }
}

export default Products;