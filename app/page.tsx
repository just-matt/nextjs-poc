import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Card } from "@/components/Card";

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

      <main>
        <section className="py-[60px]">
          <div className="w-full max-w-[1260px] mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 lg:gap-[30px] w-full">
              <Card
                title="Mastersizer 3000+"
                imageUrl="https://dam.malvernpanalytical.com/16ac0676-a947-4397-9170-b0fb00a0135c/Mastersizer-Mastersizer_%2b_Hydro_EV_%2b_Hydro_MV_%2b_Aero_S_%2b_Low_Angle_1_011_HydrInsight_Original%20file.png"
                description="World's most popular particle size"
              />
              <Card
                title="Zetium"
                imageUrl="https://dam.malvernpanalytical.com/32a283c9-a2a1-41c0-b555-b22f010ebf51/L06_PN9600_031_with_mod_FRKL_small_knob_Original%20file.png"
                description="The industrial benchmark in WDXRF"
              />
              <Card
                title="Zetasizer Advance"
                imageUrl="https://dam.malvernpanalytical.com/9aa351bb-c0e2-481b-a3e7-b338008e6fae/FRKL%20Zetasizer%20advance%20side%20view%20transparent_Original%20file.png"
                description="Light Scattering for every application"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}