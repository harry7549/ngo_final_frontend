// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import useAuth from "@/context/auth";
// import Sidebar from "../../../component/sidebar";
// import { Cookies } from "react-cookie";

// const GeneratePage = () => {
//   const cookies = new Cookies();
//   const router = useRouter();
//   const { user } = useAuth(["ADMIN"]);
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [amount, setAmount] = useState("");
//   const [donerName, setDonerName] = useState("");
//   const [pan, setPan] = useState("");
//   const [donerEmail, setDonerEmail] = useState("");
//   const [donerPhone, setDonerPhone] = useState("");
//   const [donerAddress, setDonerAddress] = useState("");
//   const [comments, setComments] = useState("");
//   const [token, setToken] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const data = cookies.get("token");
//     setToken(data || ""); // Set token to an empty string if data is undefined
//   }, []);

//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("http://localhost:3001/admin/generate", {
//         method: "POST",
//         headers: config.headers,
//         body: JSON.stringify({
//           email,
//           name,
//           amount,
//           doner_name: donerName,
//           pan,
//           doner_email: donerEmail,
//           doner_phone: donerPhone,
//           doner_address: donerAddress,
//           comments,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to generate.");
//       }

//       router.push("/success");
//     } catch (err) {
//       setError(err.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ display: "flex" }}>
//       <Sidebar />
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//           height: "40vh",
//           width: "70vw",
//         }}
//       >
//         <h1>Generate Fundraiser</h1>
//         <form
//           style={{ padding: "10px", margin: "10px" }}
//           onSubmit={handleSubmit}
//         >
//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//           <br />
//           <label>
//             Name:
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </label>
//           <br />
//           <label>
//             Amount:
//             <input
//               type="text"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//           </label>
//           <br />
//           <label>
//             Doner Name:
//             <input
//               type="text"
//               value={donerName}
//               onChange={(e) => setDonerName(e.target.value)}
//             />
//           </label>
//           <br />
//           <label>
//             PAN:
//             <input
//               type="text"
//               value={pan}
//               onChange={(e) => setPan(e.target.value)}
//             />
//           </label>
//           <br />
//           <label>
//             Doner Email:
//             <input
//               type="email"
//               value={donerEmail}
//               onChange={(e) => setDonerEmail(e.target.value)}
//             />
//           </label>
//           <br />
//           <label>
//             Doner Phone:
//             <input
//               type="text"
//               value={donerPhone}
//               onChange={(e) => setDonerPhone(e.target.value)}
//             />
//           </label>
//           <br />
//           <label>
//             Doner Address:
//             <input
//               type="text"
//               value={donerAddress}
//               onChange={(e) => setDonerAddress(e.target.value)}
//             />
//           </label>
//           <br />
//           <label>
//             Comments:
//             <textarea
//               value={comments}
//               onChange={(e) => setComments(e.target.value)}
//             />
//           </label>
//           <br />
//           <button type="submit" disabled={loading}>
//             {loading ? "Loading..." : "Subm"}
//           </button>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };
"use client";
// export default GeneratePage;
import "./styles.css";
export default function page() {
  return (
    <>
      <section class="fundofflinewrapper">
        <div class="view"></div>
        <div class="detailsfund">
          <h1> Ngo offline fund details</h1>
          <input type="checkbox" />
          <label for="keepdonation">
            Keep this donation anonymous (Donor's name and details will not be
            listed publicly.)
          </label>
          <div class="profile">
            <label for="fristname">First Name*</label>
            <input
              type="text"
              id="frist Name"
              name="Enter your first Name"
              value=""
              placeholder="enter your first name"
            />
            <label for="lastname">Last Name*</label>
            <input
              type="text"
              id="frist Name"
              name="Enter your last Name"
              value=""
              placeholder="enter your last name"
            />
          </div>
        </div>
      </section>
      <button
        onClick={(e) => {
          console.log("submit");
        }}
      >
        Submit
      </button>
    </>
  );
}
