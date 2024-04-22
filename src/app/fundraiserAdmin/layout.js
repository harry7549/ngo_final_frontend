import Header from "@/component/header";
import Footer from "@/component/footer";
import FundraiserContextData from "@/context/FundraiserContext";

export default function RootLayout({ children }) {
  return (
    <>
      <FundraiserContextData>
        {children}
        </FundraiserContextData>
    </>
  );
}
