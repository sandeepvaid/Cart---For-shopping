import React from 'react';

//Class component
class CartIem extends React.Component{

    //This is the way how we create states in react which act as an javascript object
    constructor(){
        //Here we use super because we have to call the parent constructor which is present in react component
        super();
        this.state = {
            price:99,
            title:'Realme Phone',
            qty:1,
            img:""
        }
    }

    render(){
        const {price,title,qty,img} = this.state;
        return (
            <div className='cart-item'>
                <div style={styles.mainCart} className="cart-container">
    
                    <div className="left-part">
                        <img style={styles.image} />
                    </div>

                    <div className="right-part">
                        <div style={styles.detail}>{title}</div>
                        <div style={styles.detail}>Rs {price}</div>
                    </div>

                    <div className="action-button">

                        <div className="upper-part">
                            <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />
                        </div >

                        <div className="lower-part">
                            <button className="action-icons">
                                +
                            </button>
                            <span className="action-icons">
                                {qty}
                            </span>
                            <button className="action-icons">
                                -
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}


//styles for jsx

const styles = {

    detail:{
      padding:5,
      fontSize:25,
      color:"grey",
      marginBottom:10
    },
  
    image:{
      height:150,
      width:150,
      borderRadius:4
    }
  }
  

export default CartIem;