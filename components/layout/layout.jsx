import Navbar from "./navbar";
import Footer from "./footer";
import Contact from "./contact";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Contact />
      <Footer />
    </>
  );
}
