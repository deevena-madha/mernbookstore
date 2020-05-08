import React, { Component } from "react";
class Orders extends Component {
  state = {
    orders: [
      {
        id: "6001",
        name: "Full Stack Developer",
        numberInStock: 6,
        Price: 2999
      },
      {
        id: "6002",
        name: "ReactJS",
        numberInStock: 5,
        Price: 3000
      },
      {
        id: "6003",
        name: "NodeJS",
        numberInStock: 8,
        Price: 4020
      },
      {
        id: "6004",
        name: "Modern JavaScript",
        numberInStock: 7,
        Price: 3999
      },
      {
        id: "6005",
        name: "HTML,CSS,RWD",
        numberInStock: 7,
        Price: 4000
      },
      {
        id: "6006",
        name: "MongoDB",
        numberInStock: 7,
        Price: 9999
      },
      
    ]
  };
  render() {

    return (
      <div>
        
        <h2>MY ORDERS</h2>
        <table className="table">
          
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map(ods => (
              <tr>
                <td>{ods.id}</td>
                <td>{ods.name}</td>
                <td>{ods.Price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
}
export default Orders;
