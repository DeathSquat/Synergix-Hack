import DigitalSwag from "@/components/DigitalSwag";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

const DigitalSwagPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <DigitalSwag />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default DigitalSwagPage;