// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";
// import { FaShoppingCart } from "react-icons/fa";
// import useCart from "../../../hooks/useCart";
// import useAdmin from "../../../hooks/useAdmin";


// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [cart] = useCart();
//   const [isAdmin] = useAdmin();

//   // handleLogOut
//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => console.log(error));
//   };

//   const navOptions = (
//     <>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/menu">Our Menu</Link>
//       </li>
//       <li>
//         <Link to="/order/salad">Order Food</Link>
//       </li>
//       <li>
//         <Link to="/secret">Secret</Link>
//       </li>

//       {
//         user && isAdmin && <li>
//         <Link to="/dashboard/adminHome">Dashboard</Link>
//       </li>
//       }
//       {
//         user && !isAdmin && <li>
//         <Link to="/dashboard/userHome">Dashboard</Link>
//       </li>
//       }

//       <li>
//         <Link to="/dashboard/cart">
//           <button className="btn">
//           <FaShoppingCart className="mr-2" />
//             <div className="badge badge-secondary">+{cart.length}</div>
//           </button>
//         </Link>
//       </li>

//       {user ? (
//         <>
//           {/* <span>{user?.displayName}
//         </span> */}
//           <button onClick={handleLogOut} className="btn btn-ghost">
//             LogOut
//           </button>
//         </>
//       ) : (
//         <>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//         </>
//       )}
//     </>
//   );

//   return (
//     <>
//       <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//             >
//               {navOptions}
//             </ul>
//           </div>
//           <a className="btn btn-ghost text-xl">Bistro Boss</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{navOptions}</ul>
//         </div>
//         <div className="navbar-end">
//           <a className="btn">Get Started</a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;










import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import "./Navbar.css";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  // Handle Logout
  const handleLogOut = () => {
    logOut().catch((error) => console.error(error));
  };

  // Navigation Items
  const navOptions = (
    <>
      <li>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu" className="nav-link">
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/order/salad" className="nav-link">
          Order Food
        </NavLink>
      </li>
      <li>
        <NavLink to="/secret" className="nav-link">
          Secret
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome"} className="nav-link">
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <Link to="/dashboard/cart">
          <button className="btn btn-sm flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition text-white px-3 py-2 rounded-lg">
            <FaShoppingCart />
            <span className="badge badge-secondary">+{cart.length}</span>
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white max-w-screen-xl w-full">
      <div className="navbar-start">
        {/* Mobile Menu Button */}
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-black rounded-box z-50"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Bistro Boss
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4">{navOptions}</ul>
      </div>

      {/* Auth Buttons */}
      <div className="navbar-end flex items-center justify-center">
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-ghost text-white px-4 py-2 hover:bg-red-500 transition"
          >
            LogOut
          </button>
        ) : (
          <NavLink to="/login" className="text-white px-4 py-2 hover:text-yellow-400 transition border rounded-lg">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
