import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { Route, Routes } from "react-router-dom";
import { Home, CreateCampaign, Campaign, Profile } from "./pages";
import { Navbar, Sidebar } from "./components";

export default function App() {
  return (
    <main className="main">
      <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
        <div className="sm:flex hidden mr-10 relative">
          <Sidebar />
        </div>
        <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/campaign/:id" element={<Campaign />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}
