import { Link } from "react-router-dom";
const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/" style={{ 
          color: 'white', 
          backgroundColor: '#f1352e',
          borderRadius: '8px'}}>Blogs</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</Link>
          <Link to="/bnpls" style={{ 
          color: 'white', 
          backgroundColor: '#f1359d',
          borderRadius: '8px' 
        }}>Bnpls</Link>
      </div>
    </nav>
   );
}
 
export default Navbar;