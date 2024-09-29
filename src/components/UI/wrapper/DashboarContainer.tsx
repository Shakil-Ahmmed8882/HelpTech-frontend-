export default function DashboardContainer({ children }: { children: React.ReactNode }) {
    return (
      <div className="container mx-auto max-w-7xl px-2 md:px-6 flex-grow md:pt-4 ">
        {children}
      </div>
    );
  }
