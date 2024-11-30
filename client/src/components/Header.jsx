import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { PiSignOutBold } from "react-icons/pi";
import { toggleTheme } from "../redux/theme/themeSlice";

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme); // Assuming theme is in the Redux store

  console.log(currentUser);
  return (
    <Navbar className="border-b-2 fluid rounded w-full xl:px-32">
      <Link
        to="/"
        className="self-center whitespace-nowrap font-semibold sm:text-lg"
      >
        <span className="px-2 py-1 bg-gradient-to-r text-white from-pink-400 via-purple-500  rounded-full">
          {"Stal's "}
        </span>
        Blog
      </Link>
      <form className="">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar img={currentUser.profilePicture} alt="user" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block truncate mb-1 text-sm font-semibold">
                {currentUser.username}
              </span>
              <span className="block truncate text-sm">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"} className="dropdown-item">
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item className="text-red-500">
                Sign Out{" "}
                <span className="ms-2  text-base font-semibold">
                  <PiSignOutBold />
                </span>
              </Dropdown.Item>
            </Link>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToPink" outline color="gray" pill>
              Sign In
            </Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active={path === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about" active={path === "/about"}>
          About
        </Navbar.Link>
        <Navbar.Link as={Link} to="/projects" active={path === "/projects"}>
          Projects
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
