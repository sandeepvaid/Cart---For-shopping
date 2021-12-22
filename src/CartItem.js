import React from 'react';

//Class component
const Cartitem = (props)=>{

        const {price,title,qty,img} = props.product;
        const {product,onIncreaseQty,onDecreaseQty,onDeleteQty} = props;
        return (
            <div className='cart-item'>
                <div style={styles.mainCart} className="cart-container">
    
                    <div className="left-part">
                        <img src={product.img} style={styles.image} />
                    </div>

                    <div className="right-part">
                        <div style={styles.detail}>{title}</div>
                        <div style={styles.detail}>Rs {price}</div>
                    </div>

                    <div className="action-button">

                        <div className="upper-part">
                            <img onClick={()=>onDeleteQty(product.id)}  alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1215/1215092.png" />
                        </div >

                        <div className="lower-part">
                            {/*Here we use bind so that when we call that function we can access that object value or we can use arrow function*/}
                            <button onClick={()=>onIncreaseQty(product)} className="action-icons">
                                +
                            </button>
                            <span className="action-icons">
                                {qty}
                            </span>
                            <button onClick={()=>onDecreaseQty(product)} className="action-icons">
                                -
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        );
    
}


//styles for jsx

const styles = {

    detail:{
      padding:5,
      fontSize:25,
      color:"white",
      marginBottom:10
    },
  
    image:{
      height:150,
      width:150,
      borderRadius:4
    }
  }
  

export default Cartitem;