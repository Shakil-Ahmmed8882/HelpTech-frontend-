import { Navbar } from "@/src/components/UI/navbar";
import Footer from "@/src/components/UI/navigation/footer/Footer";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
}
