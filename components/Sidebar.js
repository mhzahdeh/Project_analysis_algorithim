import { Nav } from 'react-bootstrap';
import Link from 'next/link';

const Sidebar = () => (
  <div className="d-flex flex-column bg-dark text-white vh-100 p-3" style={{ width: '250px' }}>
    <h2 className="mb-4">Restaurant Dashboard</h2>
    <Nav className="flex-column">
      <Nav.Link as={Link} href="/" className="text-white mb-2">🏠 Home</Nav.Link>
      <Nav.Link as={Link} href="/dashboard" className="text-white mb-2">📊 Dashboard</Nav.Link>
      <Nav.Link as={Link} href="/orders" className="text-white mb-2">📦 Orders</Nav.Link>
      <Nav.Link as={Link} href="/reviews" className="text-white mb-2">⭐ Reviews</Nav.Link>
      <Nav.Link as={Link} href="/refunds" className="text-white mb-2">💸 Refunds</Nav.Link>
    </Nav>
  </div>
);

export default Sidebar;
