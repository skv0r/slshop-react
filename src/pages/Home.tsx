import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-[1440px] py-16">
        <Main/>
      </main>
    </div>
  );
}