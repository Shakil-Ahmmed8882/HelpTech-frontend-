import { ReactNode } from "react";
import SidebarWrapper from "./_components/sidebar/SidebarWrapper";
import DashboardNavbar from "./_components/navbar/DashboardNavbar";
import DashboardContainer from "@/src/components/UI/wrapper/DashboarContainer";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <DashboardContainer>
      <section className="flex min-h-screen">
        <SidebarWrapper />
        <DashboardNavbar>{children}</DashboardNavbar>
      </section>
    </DashboardContainer>
  );
};

export default layout;
