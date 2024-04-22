"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/context/auth";
import Sidebar from "../../../component/sidebar";
import { Cookies } from "react-cookie";
import "./generatecode.css";
import Link from "next/link";
const GeneratePage = () => {
  const cookies = new Cookies();
  const router = useRouter();
  const { user } = useAuth(["ADMIN"]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [token, settoken] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const data = cookies.get("token");
    settoken(data || ""); // Set token to an empty string if data is undefined
  }, []);
  console.log(token);
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://allowing-shiner-needlessly.ngrok-free.app/admin/generate",
        {
          method: "POST",
          config,
          body: JSON.stringify({ email, name }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate.");
      }

      router.push("/success");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <Sidebar />
      <div className="rightSection">
        <div className="rightsubSection">
          <h1>Generate Credentials</h1>
          <div className="rightsectionForm">
            <form>
              <span>
                <span>E-mail </span>
                <span className="compulsory">*</span>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your e-mail"
                />
              </span>
              <span>
                <span>Name </span>
                <span className="compulsory">*</span>
                <br />
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Enter your full name"
                />
              </span>
              <span>
                <span>Mobile Number </span>
                <span className="compulsory">*</span>
                <br />
                <input
                  type="number"
                  name="mobileNumber"
                  id="mobileNumber"
                  placeholder="Enter your mobile no."
                  pattern="[0-9]{10}"
                  maxLength="10"
                />
              </span>
            </form>
          </div>
          <div className="rightsectionBtn">
            <Link href="#">
              <button type="reset" className="cancelBtn filled">
                Cancel
              </button>
            </Link>
            <Link href="#">
              <button type="submit" className="cancelBtn">
                Generate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneratePage;
