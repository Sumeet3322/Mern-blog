import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashProfile from "../components/DashProfile";
import DashSidebar from "../components/DashSidebar";

export default function DashBoard() {
  const location = useLocation(); // Get the current location
  const [tab, setTab] = useState(""); // Initialize with a string

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl); // Set the tab as a string
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row ">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      <div className="">
        {/* Profile */}
        {tab === "profile" && <DashProfile />}
      </div>
    </div>
  );
}
