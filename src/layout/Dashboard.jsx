import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex gap-4 mt-8">
            <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
        <Sidebar.Item href="/" icon={HiChartPie}>
            Home
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/all-employee-list" icon={HiViewBoards}>
            All Employee List
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/employee-list" icon={HiInbox}>
            Employee List
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/progress" icon={HiShoppingBag}>
            Progress
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/work-sheet" icon={HiArrowSmRight}>
            Work Sheet
          </Sidebar.Item>
          <Sidebar.Item href="/payment-history" icon={HiTable}>
            Payment History
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/signup" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    <div className="mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;