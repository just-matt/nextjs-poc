import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      
      <Hero
        headline="Advanced Materials Characterisation"
        intro="Helping scientists and engineers understand the materials that shape our world."
        imageUrl="https://dam.malvernpanalytical.com/4fe5121c-e734-4a53-9448-ada40097b76d/637316985638840907DJ_Original%20file.jpg"
      />
      
      <main></main>
    </>
  );
}