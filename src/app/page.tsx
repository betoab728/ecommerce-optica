import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export default function Home() {
  return (
    <div className={poppins.className}>
      <Header />
       <NavBar />
    </div>
  );
}
