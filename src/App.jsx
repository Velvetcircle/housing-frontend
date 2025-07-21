import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import WhatsAppIcon from "./components/WhatsAppIcon";
import MessageIcon from "./components/MessageIcon";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
      <WhatsAppIcon />
      <MessageIcon />
    </div>
  );
};

export default App;
