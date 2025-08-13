import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums/Breadcrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Descriptionbox from '../components/DescriptionBox/Descriptionbox';
import RelatedProduct from '../components/RelatedProduct/RelatedProduct';

const Product = () => {
  const {all_product} = useContext(ShopContext) ; 
  const {productId} = useParams() ;
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrums product = {product}/>
      <ProductDisplay product = {product}/>
      <Descriptionbox />
      <RelatedProduct />
    </div>
  )
}

export default Product
