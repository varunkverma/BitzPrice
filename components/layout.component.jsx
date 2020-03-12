import Navbar from "./navbar/navbar.component";

const Layout = props => (
  <div>
    <Navbar />
    {props.children}
  </div>
);
export default Layout;
