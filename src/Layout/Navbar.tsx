import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeToken } from "../redux/features/user/userSlice";
import { useAppSelector } from "../redux/hook";
import logo from "../logo/logo.jpg"

const Navbar = () => {
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem(`accessToken`);
    dispatch(removeToken());
  };
  return (
    <div className="navbar bg-white">
      <div className="flex-1">
        <Link to="/">
          <img className="ml-3 w-20 rounded-md" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="flex-1">
        <h1 className="font-extrabold text-primary sm:text-4xl text-xl sm:-ms-5">
          <Link to="/">BookShelf</Link>
        </h1>
      </div>
      <div className="flex-col-reverse">
        {token ? (
          <ul className="menu menu-horizontal mr-8">
            <li>
              <details>
                <summary>Your info</summary>
                <ul className="p-2 bg-white border-primary border-2 z-10">
                  <li>
                    <Link to="/">All Book's</Link>
                  </li>
                  <li>
                    <Link to="/my-book">My Book's</Link>
                  </li>
                  <li>
                    <Link to="/add-book">Add New Book</Link>
                  </li>
                  <li>
                    <Link to="/my-profile">My Profile</Link>
                  </li>
                  <li>
                    <a onClick={() => handleLogOut()}>Logout</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        ) : (
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/login" className="font-bold text-lg text-primary">
                Login
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
