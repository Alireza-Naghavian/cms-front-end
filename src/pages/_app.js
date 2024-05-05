import NavBar from "@/components/modules/NavBar/NavBar";
import SideBar from "@/components/modules/SideBar/SideBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="container">
      <SideBar />
      <main className="main">
        <NavBar />
        <Component {...pageProps} />
      </main>
    </div>
  );
}
