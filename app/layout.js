import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_context/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "Hotel Inc",
  title: { template: "%s | Hotel Inc.", default: "Hotel Inc." },
  description: "Luxury cabin style hotels.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`bg-primary-950 antialiased  text-primary-100 min-h-screen ${josefin.className} flex flex-col`}
      >
        <Header>
          <Logo />
          <Navigation />
        </Header>
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
