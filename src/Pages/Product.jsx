import React,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescrptionBox from '../components/DescrptionBox/DescrptionBox';
import RelatedProduct from '../components/RelatedProduct/RelatedProduct';
const Product = () => {
 const { all_product } = useContext(ShopContext);
 const {Product_ID} = useParams();
 const product = all_product.find((e)=>e.id===Number(Product_ID))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescrptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product
