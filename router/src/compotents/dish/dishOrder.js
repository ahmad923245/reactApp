import React, { Component } from 'react';

export default class Dish extends Component {
  state={
    show:false
  }



  ondishOrder = (evt) => {


    this.props.data.ordered = evt.target.checked;
    this.setState({show:evt.target.checked})

  }
  getqunt = (e) => {
    this.props.data.val = e.target.value;
    // console.log(this.props.data.val); 

  }
  render() {
     const style={backgroundColor:"red"}
    return (<tr>
      <td style={this.state.show?style:null}>{this.props.data.name}</td>
      <td>{this.props.data.price}</td>
      <td><input  onChange={this.ondishOrder} type="checkBox" /></td>
      <td><input onChange={this.getqunt} type="Number" /></td>




    </tr>


    )
  }
}


export default class FoodManger extends Component {


  state = {
    
    
    dishes: [
      {
        name: 'biryani',
        price: 90
      },
      {
        name: 'pilao',
        price: 190
      },
      {
        name: 'daleem',
        price: 60
      },
      {
        name: 'saag',
        price: 90
      }


    ]
    ,
    totalAmount: 0,
    howmanyorderdishes:""
  }
  orderdish = () => {
    let total = 0;
    let qunt = 0;

    this.state.dishes.forEach((dish) => {
      if (dish.ordered) {

       

        total += dish.price * (dish.val || 1);
        qunt+= +dish.val;

       

      }

   
    })

    console.log(total)

    this.setState({
      totalAmount: total,
      howmanyorderdishes:qunt
      
    })
    console.log(this.state.totalAmount);

  }


  render() {

    return (<div className="App">
      <table border="1">

        {this.state.dishes.map((item) => {
          return (<Dish data={item} />)
        })}
      </table>
      <button onClick={this.orderdish}>Order Dishes</button>
      <div>total{this.state.totalAmount}</div>
      <div>Quntity:{this.state.howmanyorderdishes}</div>
    </div>
    );
  }
}



