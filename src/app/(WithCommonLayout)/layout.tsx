import { Navbar } from "@/src/components/UI/navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="flex flex-col justify-center items-center min-h-[70vh] ">{children}</main>
    </div>
  );
}
