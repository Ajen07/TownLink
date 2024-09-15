import AdminSidebar from "@/components/dashboard/sidebar/admin-side-bar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="md:flex h-full w-[230px] z-30 flex-col fixed inset-y-0">
        <AdminSidebar />
      </div>
      <main className="md:pl-[230px] h-full">{children}</main>
    </div>
  );
};

export default MainLayout;
