import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import MenuItem from "@/components/MenuItem";
import LeopardDivider from "@/components/LeopardDivider";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import CartButton from "@/components/CartButton";
import sidesPhoto from "@/assets/sides-photo.jpg";
import dessertPhoto from "@/assets/dessert-photo.jpg";
import basilicaBurger from "@/assets/basilica-burger.png";
import porquinaBurger from "@/assets/porquina-burger.png";
import laCabraBurger from "@/assets/la-cabra-burger.jpg";
import burgerVideo from "@/assets/burger-video.mp4";

const sections = [
  { id: "hamburguesas", label: "Hamburguesas" },
  { id: "smash", label: "Smash" },
  { id: "extras", label: "Extras" },
  { id: "postres", label: "Postres" },
  { id: "bebidas", label: "Bebidas" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar sections={sections} />

      <HeroSection />

      <LeopardDivider />

      {/* HAMBURGUESAS */}
      <MenuSection
        id="hamburguesas"
        title="Hamburguesas"
        subtitle="Panes: Brioche y rústica (+0,50€)"
      >
        <MenuItem
          name="La Cabra"
          description="Cebolla caramelizada, rulito de cabra, bacon crispy, rúcula y miel mostaza."
          price="9,90€"
        />
        <MenuItem
          name="Heterobásica"
          description="Carne, cheddar, lechuga, tomate, cebolla, mayonesa."
          price="8,00€"
        />
        <MenuItem
          name="Gallega"
          description="Carne de ternera premium, queso de tetilla/arzúa pimentonado, pan rústico y pimiento verde, brotes/rúcula, salsa garlic."
          price="12,00€"
        />
        <MenuItem
          name="Ay Caramba"
          description="Carne, queso cheddar, guacamole, pico de gallo, lechuga, salsa chipotle, jalapeños."
          price="9,99€"
        />
        <MenuItem
          name="Pollo Crujiente"
          description="Pollo rebozado en cornflakes, tomate, salsa cheddar y tira de bacon, cebolla encurtida."
          price="9,99€"
        />
      </MenuSection>

      <VideoSection
        videoUrl={burgerVideo}
        title="Smash It"
        subtitle="Doble carne, doble sabor"
      />

      {/* SMASH BURGERS */}
      <MenuSection id="smash" title="Smash Burgers" subtitle="La nueva forma de disfrutar">
        <MenuItem
          name="La Perversa"
          description="Doble cheeseburger de queso americano con salsa mayo sweet chilli y cebolla encurtida, bacon crispy."
          price="9,99€"
        />
        <MenuItem
          name="Porkiña"
          description="Doble smash, tomate seco, mayo con albahaca, brotes, cebolla, queso emmental."
          price="9,99€"
          image={basilicaBurger}
        />
        <MenuItem
          name="porkiña"
          description="Doble de carne, salsa bacon ahumado y cheddar, cebolla caramelizada, tira de bacon, queso americano."
          price="9,99€"
          image={porquinaBurger}
        />
      </MenuSection>

      <LeopardDivider />

      {/* EXTRAS */}
      <MenuSection
        id="extras"
        title="Para Picar"
        subtitle="Complementa tu experiencia"
        image={sidesPhoto}
        imageAlt="Patatas con bacon y cheddar"
      >
        <MenuItem name="Patatas Normales" description="Crujientes y doradas." price="2,70€" />
        <MenuItem name="Patatas Bacon Cheddar" description="Con bacon crispy y salsa cheddar." price="4,00€" />
        <MenuItem name="Patatas Gajo" description="Corte rústico, perfectamente especiadas." price="3,00€" />
        <MenuItem name="Patatas Gajo Bacon-Cheddar" description="Gajos con bacon y cheddar fundido." price="4,50€" />
        <MenuItem
          name="Nachos Loaded"
          description="Con bacon crispy, guacamole, pico de gallo y cheddar."
          price="5,00€"
        />
        <MenuItem name="Fingers de Pollo" description="Con miel mostaza o sweet chilli." price="7,00€" />
        <MenuItem name="Croquetas de Jamón" description="8 unidades. Caseras y cremosas." price="7,00€" />
        <MenuItem
          name="Croquetas Cecina y San Simón"
          description="8 unidades. Cecina y queso San Simón ahumado."
          price="8,50€"
        />
      </MenuSection>

      <VideoSection
        videoUrl="https://videos.pexels.com/video-files/3327220/3327220-uhd_2560_1440_24fps.mp4"
      />

      {/* POSTRES */}
      <MenuSection
        id="postres"
        title="Postres"
        subtitle="El final perfecto"
        image={dessertPhoto}
        imageAlt="Cheesecake artesanal"
        reverse
      >
        <MenuItem
          name="Cheesecake Frutos Rojos"
          description="Con mermelada de frutos rojos casera."
          price="5,50€"
        />
        <MenuItem name="Cheesecake Oreo" description="Cremosa base con galleta Oreo." price="5,00€" />
        <MenuItem name="Cheesecake Lotus" description="Con crema de galleta Lotus." price="5,00€" />
      </MenuSection>

      <LeopardDivider />

      {/* BEBIDAS */}
      <MenuSection id="bebidas" title="Bebidas">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          <div>
            <h3 className="font-display text-xl text-primary mb-4 font-semibold">Refrescos</h3>
            <MenuItem name="Coca-Cola" description="" price="3,00€" />
            <MenuItem name="Sprite" description="" price="3,00€" />
            <MenuItem name="Aquarius Limón" description="" price="3,00€" />
            <MenuItem name="Aquarius Naranja" description="" price="3,00€" />
            <MenuItem name="Monster Mangoloco" description="" price="3,00€" />
            <MenuItem name="Fuze Tea" description="" price="3,00€" />
          </div>
          <div>
            <h3 className="font-display text-xl text-primary mb-4 font-semibold">Cervezas</h3>
            <MenuItem name="Estrella" description="" price="3,50€" />
            <MenuItem name="1906" description="" price="3,50€" />
          </div>
        </div>
      </MenuSection>

      {/* SALSAS */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-primary font-bold mb-6">Salsas +0,50€</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Ali oli", "BBQ", "Mayo", "Ketchup", "Sweet Chilli", "Miel Mostaza", "Salsa Cheddar", "Mayo Albahaca", "Mayo Cítrica"].map(
              (salsa) => (
                <span
                  key={salsa}
                  className="font-body text-xs uppercase tracking-[0.15em] text-foreground bg-muted px-4 py-2 rounded-sm"
                >
                  {salsa}
                </span>
              )
            )}
          </div>
          <div className="mt-8">
            <p className="font-body text-xs text-muted-foreground tracking-wide">
              Extras: Bacon +1€ · Huevo +1€ · Bacon Crispy +1€ · Cebolla Caramelizada +1€
            </p>
          </div>
        </div>
      </section>

      <LeopardDivider />

      <Footer />
      
      <CartButton />
    </div>
  );
};

export default Index;
