import React, { useContext } from 'react'
import classes from './ShopProduct.module.css'
import { CartContext } from "../../../context/cartContext";
import ActionButton from '../../Buttons/ActionButton/ActionButton';

const ShopProduct = ({id, index, name, filename, price, unit_measure, description}) => {
  const {
    cartQuantity,
    getItemQuantity, 
    increaseCartQuantity, 
    decreaseCartQuantity, 
    removeFromCart
  } = useContext(CartContext);
  const productQuantity = getItemQuantity(id);

  const handleIncreaseQuantity = (product) => {
    increaseCartQuantity(product)
  };

  const handleDecreaseQuantity = (productId) => {
    decreaseCartQuantity(productId)
  }

  const renderActionButtons = () => {
    if (productQuantity === 0) {
      return (
        <div className={classes.productButtonsWrapper}>
          <ActionButton 
            onClick={() => handleIncreaseQuantity(id)}
            children={"+"}
          />
        </div>
      )
    };

    if (productQuantity > 0) {
      return ( 
        <div className={classes.productButtonsWrapper}>
          <ActionButton 
            onClick={() => handleDecreaseQuantity(id)}
            children={"-"}
          />
          <span>
            {productQuantity}
          </span>
          <ActionButton 
            onClick={() => handleIncreaseQuantity(id)}
            children={"+"}
          />
        </div>
      )
    };
  };

  return (
    <div className={classes.productWrapper} key={index}>
      <div className={classes.imageWrapper}>
        <img src={require(`../../../../data/images/${filename}`)} alt='product'/>
      </div>
      <div className={classes.titleWrapper}>
        <span className={classes.productName}>
          {name}
        </span>
        <span className={classes.productPrice}>
          ${price} / {unit_measure}
        </span>
        <div className={classes.productBottomContainer}>
          <div className={classes.productDescription}>
            {description}
          </div>
          {renderActionButtons()}
        </div>
      </div>
    </div>
  )
}

export default React.memo(ShopProduct);