import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "World Travelling",
  description: "This is a website about my trips around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
