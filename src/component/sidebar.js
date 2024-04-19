"use client";
import { usePathname, useRouter } from "next/navigation";
import "../component/module.admin.css";
import "../app/admin/fundraisers/fundraisersAdmin.css";
export default function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <div className="leftSection">
        <a href="#">
          <p>
            <img src="../asset/dashboard.png" height="16" width="16" />
            Dashboard
          </p>
        </a>
        <a href="#">
          <p>
            <i className="fa-regular fa-address-book"></i>Credentials
          </p>
        </a>
        <a href="#">
          <p className="active">
            <i className="fa-solid fa-coins"></i>Fundraiser
          </p>
        </a>
        <a href="#">
          <p>
            <i className="fa-solid fa-hand-holding-dollar"></i>Donation
          </p>
        </a>
      </div>
    </>
  );
}
{
  /* <div class="leftSection">
  <a href="#">
    <p>
      <img
        src="../asset/dashboard.png"
        alt="dashboard"
        height="16"
        width="16"
      />
      Dashboard
    </p>
  </a>
  <a href="#">
    <p>
      <i class="fa-regular fa-address-book"></i>Credentials
    </p>
  </a>
  <a href="#">
    <p class="active">
      <i class="fa-solid fa-coins"></i>Fundraiser
    </p>
  </a>
  <a href="#">
    <p>
      <i class="fa-solid fa-hand-holding-dollar"></i>Donation
    </p>
  </a>
</div>; */
}
