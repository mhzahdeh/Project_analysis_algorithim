import Sidebar from './Sidebar';

const Layout = ({ children }) => (
  <div className="d-flex">
    <Sidebar />
    <div className="flex-grow-1 p-4 bg-light">{children}</div>
  </div>
);

export default Layout;
