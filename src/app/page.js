"use client";
import Header from "@/component/header";
// export default function Home() {
//   return <>hello</>;
// }
import { useEffect, useState } from "react";
import { secureLocalStorage } from "react-secure-storage";

const App = () => {
  const [value, setValue] = useState();
  useEffect(() => {
   
   
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW4yQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImZ1bmRyYWlzZXJJZCI6IjI0ZmJkYzU3LTkzYjAtNGFjMC04ZmIyLTI2NjAyOGEwNmEwNSIsInByb2ZpbGVJbWFnZSI6bnVsbCwiaWF0IjoxNzEzMjY3OTcyLCJleHAiOjE3MTMyNzE1NzJ9.hrzLYnuEjWpGKKHpwQq2EaO2ov1cmr8TKi3vNp82UC8
   
   
   
    // secureLocalStorage.setItem("number", 12);
    // secureLocalStorage.setItem("string", "12");
    // secureLocalStorage.setItem("boolean", true);
    // let value = secureLocalStorage.getItem("object");
    // setValue(value.message);
    // console.log(value);
  }, []);

  return (
    <div>
      {/* <Header />     */}
      This is a sample code
      {/* {value} */}
    </div>
  );
};

export default App;
