import Header from "@/components/header";
import Pay from "@/components/pay";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className=" bg-background flex flex-col h-screen">
      <Header />
      <Pay />
      <Footer />
    </div>
  );
}
