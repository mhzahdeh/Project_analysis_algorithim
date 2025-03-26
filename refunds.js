import { Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { fetchRefunds } from '../api/apiClient';

const Refunds = () => {
  const [refunds, setRefunds] = useState([]);

  useEffect(() => {
    fetchRefunds().then((data) => {
      setRefunds(data);
    });
  }, []);

  return (
    <div>
      <h1 className="mb-4">💸 Refunds</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Refund ID</th>
            <th>Order ID</th>
            <th>Reason</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {refunds.length === 0 ? (
            <tr><td colSpan="4">Loading...</td></tr>
          ) : (
            refunds.map((refund) => (
              <tr key={refund.id}>
                <td>{refund.id}</td>
                <td>{refund.orderId}</td>
                <td>{refund.reason}</td>
                <td>${refund.amount}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Refunds;
