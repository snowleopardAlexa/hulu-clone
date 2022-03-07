import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
   <div>
     <Head>
       <title>Hulu Clone</title>
     </Head>
     <Header />
     <Navbar />

     {/* Results */}
   </div>
  );
}
