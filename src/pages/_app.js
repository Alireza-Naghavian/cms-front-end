import NavBar from "@/components/modules/NavBar/NavBar";
import SideBar from "@/components/modules/SideBar/SideBar";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:60*60*1000
    }
  }
});
export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>

    <div className="container">
      <SideBar />
      <main className="main">
        <NavBar />
        <Component {...pageProps} />
      </main>
    </div>
    </QueryClientProvider>
  );
}
