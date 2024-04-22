"use client";
import { usePathname } from "next/navigation";
import "../component/module.admin.css";
import "../app/admin/fundraisers/fundraisersAdmin.css";
import Link from "next/link";
export default function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <div className="leftSection">
        <Link href="/admin">
          <p className={` ${pathname === "/admin" ? "active" : ""}`}>
            <img src="/images/dashboardIcon.png" height="16" width="16" />
            Dashboard
          </p>
        </Link>
        <Link href="/admin/generatecode">
          <p
            className={` ${pathname === "/admin/generatecode" ? "active" : ""}`}
          >
            <i className="fa-regular fa-address-book"></i>Credentials
          </p>
        </Link>
        <Link href="/admin/fundraisers">
          <p
            className={` ${pathname === "/admin/fundraisers" ? "active" : ""}`}
          >
            <i className="fa-solid fa-coins"></i>Fundraiser
          </p>
        </Link>
        <Link href="/admin/adddonation">
          <p
            className={` ${pathname === "/admin/adddonation" ? "active" : ""}`}
          >
            <i className="fa-solid fa-hand-holding-dollar"></i>Donation
          </p>
        </Link>
      </div>
    </>
  );
}
