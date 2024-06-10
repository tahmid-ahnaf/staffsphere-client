import { useContext } from "react";
// import { AuthContext } from "../../../components/AuthProvider/AuthProvider";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(error => console.log(error));
  }
  return (

    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">StaffSphere</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        
        {
          user ? <>
          <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img={user.photoURL} rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{user.displayName}</span>
            <span className="block truncate text-sm font-medium">{user.email}</span>
          </Dropdown.Header>
          <Dropdown.Item><Navbar.Link href="/dashboard">Dashboard</Navbar.Link></Dropdown.Item>
          <Dropdown.Item><Navbar.Link href="/contact-us">Contact Us</Navbar.Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
        </Dropdown>
          </>
          :
          <Navbar.Collapse>
          <Navbar.Link href="/login">Sign In</Navbar.Link>
          </Navbar.Collapse>
        }
          
          
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/dashboard">Dashboard</Navbar.Link>
        <Navbar.Link href="/contact-us">Contact Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

    // <div className="navbar bg-base-100 lg:max-w-[85%] mx-auto">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
    //       >
    //         <li>
    //           <NavLink to={"/"}>Home</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to={"/update-profile"}>Update Profile</NavLink>
    //         </li>

    //         <li>
    //           <NavLink to={"/agents"}>Agents</NavLink>
    //         </li>

    //         {
    //           user && (reload || user.photoURL) ? 
    //           <li onClick={handleLogOut}>
    //           Logout</li>
    //           :
    //           <li><Link to={"/login"}>Sign In</Link></li>
              
    //         }
          
    //       </ul>
    //     </div>
    //     <NavLink className="font-bold lg:text-3xl text-2xl" to={"/"}>UrbanAbodes</NavLink>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //     <li>
    //           <NavLink to={"/"}>Home</NavLink>
    //     </li>
    //     <li>
    //           <NavLink to={"/update-profile"}>Update Profile</NavLink>
    //     </li>
    //     <li>
    //           <NavLink to={"/agents"}>Agents</NavLink>
    //     </li>
    //     </ul>
    //   </div>
    //   <div className="navbar-end gap-4">
    //   {
    //     user && (reload || user.photoURL) ? 
    //     <div className="flex items-center gap-2">
    //     <div className="tooltip tooltip-left cursor-pointer avatar" data-tip={user.displayName}>
    //     <div className="w-10 h-10 rounded-full">
    //       <img alt="user photo" src={user.photoURL} />
    //     </div>
    //   </div>
    //     <button onClick={handleLogOut} className="btn btn-neutral text-white text-lg hidden lg:flex">Logout</button>
    //     </div>
    //     :
    //     <Link to={"/login"} className="btn btn-outline btn-success text-white text-lg">Sign In</Link>

    //   }  
    //   </div>
    // </div>
  );
};

export default NavigationBar;
