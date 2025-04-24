import MainNav from "./MainNav";

export default function Header() {
  return (
    <header className="w-full border-b bg-white px-6 py-4 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="text-xl font-bold">SLShop</div>
        <MainNav />
      </div>
    </header>
  );
}