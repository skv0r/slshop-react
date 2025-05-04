import MainNav from "./MainNav";
import RightNav from "./RightNav";

export default function Header() {
  return (
    <header className="w-full border-b bg-white px-6 py-4 shadow-sm">
      <div className="mx-auto flex items-center justify-between">
        <a href="/" className=" border-1 rounded-[6px] py-1.25 px-16.75">
          <img src="/sl_shop_logo.svg" alt="Логотип" />
        </a>
        <MainNav />
        <RightNav />
      </div>
    </header>
  );
}
