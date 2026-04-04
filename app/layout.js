import "./globals.css";
import Navbar from "./components/Navbar";
import AiChat from "./components/AiChat";

export const metadata = {
  title: "Kurt Hydein P. Imperial | Software Engineer",
  description:
    "Portfolio of Kurt Hydein P. Imperial — software engineer specializing in full‑stack development, automation, QA, and production support.",
  keywords: [
    "Kurt Imperial",
    "Full‑stack developer",
    "Software Engineer",
    "Cebu Philippines",
    "React Next.js",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Kurt Hydein P. Imperial | Software Engineer",
    description:
      "Modern portfolio showcasing web development projects, automation tools, and production support expertise.",
    url: "[xn--yourverceldomain-ye6iga.vercel.app](https://your‑vercel‑domain.vercel.app/)",
    siteName: "Kurt Imperial Portfolio",
    locale: "en_PH",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-20">{children}</div>
        <AiChat />
      </body>
    </html>
  );
}
