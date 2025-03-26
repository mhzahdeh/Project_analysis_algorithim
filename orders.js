import { Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { fetchOrders } from '../api/apiClient';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders().then((data) => {
      setOrders(data);
    });
  }, []);

  return (
    <div>
      <h1 className="mb-4">📦 Orders</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Item</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Delivery Time</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr><td colSpan="5">Loading...</td></tr>
          ) : (
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.item}</td>
                <td>${order.amount}</td>
                <td>{order.status}</td>
                <td>{order.deliveryTime}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;
