import { Inter } from "next/font/google";
import "./main.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "khalil ecommerce app",
  description: "Generated by khalil ullah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
