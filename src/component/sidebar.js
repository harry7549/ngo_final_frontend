"use client";
import { usePathname, useRouter } from "next/navigation";
import "../component/module.admin.css";
export default function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <div className="leftSection">
        <div className="tab">
          <a href="/admin">
            <button
              type="submit"
              className={`tabButton ${pathname === "/admin" ? "active" : ""}`}
            >
              <i className="fa-regular fa-circle mainCircle"></i> Dashboad
            </button>
          </a>
          <a href="/admin/generatecode">
            <button
              type="submit"
              className={`tabButton ${
                pathname === "/admin/generatecode" ? "active" : ""
              }`}
            >
              <i className="fa-regular fa-circle mainCircle"></i> Generate
            </button>
          </a>
          <a href="/admin/fundraisers">
            <button
              type="submit"
              className={`tabButton ${
                pathname === "/admin/fundraisers" ? "active" : ""
              }`}
            >
              <i className="fa-regular fa-circle mainCircle"></i> Fundraisers
            </button>
          </a>
          <a href="/admin/adddonation">
            <button
              type="submit"
              className={`tabButton ${
                pathname === "/admin/adddonation" ? "active" : ""
              }`}
            >
              <i className="fa-regular fa-circle mainCircle"></i> Donation
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
