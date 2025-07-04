const Sidebar = () => {
  return (
    <aside className="w-56 h-full hidden md:block border-r bg-white p-4 space-y-4 text-sm text-gray-700 sticky top-[64px]">
      <div className="font-semibold">Home</div>
      <div>Explore</div>
      <div>Shorts</div>
      <div>Subscriptions</div>
    </aside>
  );
};

export default Sidebar;
