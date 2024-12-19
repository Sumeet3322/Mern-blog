import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DashSidebar() {
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div>
      <Sidebar className="w-full md:w-56 md:h-screen">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {/* Use the 'as' prop to replace the internal <a> with <Link> */}
            <Sidebar.Item
              as={Link}
              to="/dashboard?tab=profile"
              active={tab === "profile"}
              icon={HiUser}
              label="User"
              labelColor="dark"
            >
              Profile
            </Sidebar.Item>
            <Sidebar.Item
              icon={HiArrowSmRight}
              className="cursor-pointer"
              labelColor="dark"
            >
              Sign Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
