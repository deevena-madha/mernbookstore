import React, { Component } from "react";
class Orders extends Component {
  state = {
    orders: [
      {
        id: "5c15",
        name: "Full Stack Developer",
        numberInStock: 6,
        Price: 10000
      },
      {
        id: "5a16",
        name: "ReactJS",
        numberInStock: 5,
        Price: 5000
      },
      {
        id: "5t17",
        name: "NodeJS",
        numberInStock: 8,
        Price: 4000
      },
      {
        id: "6c18",
        name: "Modern JavaScript",
        numberInStock: 7,
        Price: 3500
      },
      {
        id: "5d19",
        name: "HTML,CSS,RWD",
        numberInStock: 7,
        Price: 4000
      },
      {
        id: "5a20",
        name: "MongoDB",
        numberInStock: 7,
        Price: 3.5
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
