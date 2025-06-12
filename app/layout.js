import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "Hotel Inc",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by Hotel Inc</footer>
      </body>
    </html>
  );
}
