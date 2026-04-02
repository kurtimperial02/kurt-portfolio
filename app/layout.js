import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Kurt Hydein P. Imperial | Software Engineer",
  description:
    "Portfolio of Kurt Hydein P. Imperial, a software engineer focused on full-stack development, automation, QA, and production support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
