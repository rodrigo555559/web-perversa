import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import MenuItem from "@/components/MenuItem";
import LeopardDivider from "@/components/LeopardDivider";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/Accordion";
import BackToTop from "@/components/BackToTop";
import RotatingText from "@/components/RotatingText";
import sidesPhoto from "@/assets/dessert-photo.jpg";
import dessertPhoto from "@/assets/dessert-photo.jpg";
import basilicaBurger from "@/assets/basilica-burger.png";
import porquinaBurger from "@/assets/porkina.png";
import laCabraBurger from "@/assets/la-cabra-burger.jpg";
import burgerVideo from "@/assets/burger-video.mp4";
import cocaCola from "@/assets/coca-cola.png";
import sprite from "@/assets/sprite.png";
import aquariusNaranja from "@/assets/aquarius-naranja.png";
import aquariusLimon from "@/assets/aquarius.png";
import mangoLoco from "@/assets/mango-loco.png";
import fuzeTea from "@/assets/fuze-tea.jpg";
import monster from "@/assets/monster.png";
import fantaLimon from "@/assets/fanta-limon.png";
import fantaNaranja from "@/assets/fantanaranja.png";
import estrellaGalicia from "@/assets/estrella-galicia.png";
import milnueve from "@/assets/milnueve.png";
import logoPerversa from "@/assets/logo-perversa.png";
import perversionImage from "@/assets/perversion.jpg";
import logoSilhouette from "@/assets/logo-circle.png";
import siluetaImage from "@/assets/silueta.png";
import basilicaImage from "@/assets/basílica.jpeg";
import patatasImage from "@/assets/patatas.png";
import gajoImage from "@/assets/gajo.png";
import gajoCheddarImage from "@/assets/gajo-cheddar.png";
import baconCheddarImage from "@/assets/bacon-cheddar.png";
import laPerversaImage from "@/assets/laperversa.png";
import heterobasicaImage from "@/assets/heterobasica.jpg";
import goldenImage from "@/assets/golden.jpg";
import croquetasImage from "@/assets/croquetas.png";
import cheddarbaconImage from "@/assets/cheddarbacon.png";
import comboVetImage from "@/assets/COMBO VET (2).jpg";
import tarta1Image from "@/assets/tarta1.jpg";
import tarta2Image from "@/assets/tarta2.jpg";

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

      {/* MENU VET */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary font-black mb-6 sm:mb-8 tracking-wider drop-shadow-lg">
            MENU VET
          </h1>
          <div className="flex justify-center mb-6 sm:mb-8">
            <img
              src={comboVetImage}
              alt="COMBO VET"
              className="w-full max-w-3xl sm:max-w-4xl h-auto object-contain rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <LeopardDivider />

      {/* HAMBURGUESAS */}
      <MenuSection
        id="hamburguesas"
        title="Hamburguesas"
        subtitle="Panes: Brioche"
        siluetaImage={siluetaImage}
      >
        <MenuItem
          name="La Cabra"
          description="Cebolla caramelizada, rulito de cabra, bacon crispy, rúcula y miel mostaza."
          price="9,90€"
          image={laCabraBurger}
          imageSize="large"
        />
        <MenuItem
          name="Heterobásica"
          description="Carne o pollo, cheddar, lechuga, tomate, cebolla, mayonesa."
          price="8,00€"
          image={heterobasicaImage}
          imageSize="large"
        />
        <MenuItem
          name="Golden de Pollo"
          description="Hamburguesa de pollo, tomate, cebolla blanca, bacon, salsa cheddar y salsa mayonesa."
          price="9,90€"
          image={goldenImage}
          imageSize="large"
        />
        <p className="text-primary font-display text-lg sm:text-xl md:text-2xl tracking-wider text-center mt-8 font-bold">
          PRÓXIMAMENTE:
        </p>
        <MenuItem
          name="La Gallega"
          description="Carne de ternera premium, queso de tetilla/arzúa pimentonado, pan rústico y pimiento verde, brotes/rúcula, salsa garlic."
          price="12,00€"
        />
        <MenuItem
          name="La Ay Caramba"
          description="Carne, queso cheddar, guacamole, pico de Gallo, lechuga, salsa chipotle, jalapeños."
          price="9,99€"
        />
      </MenuSection>

      {/* SMASH BURGERS - IMAGEN */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center">
            <img
              src={perversionImage}
              alt="Perversión"
              className="w-full max-w-xl sm:max-w-2xl aspect-square object-cover rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* SMASH BURGERS - CATÁLOGO */}
      <MenuSection
        id="smash"
        title="Smash Burgers"
        subtitle="DICE EL COCINERO QUE SI ERES GUAPA QUE LE HABLES"
        siluetaImage={siluetaImage}
      >
        <MenuItem
          name="La Perversa"
          description="Doble smash, queso americano, cebolla caramelizada, bacon, salsa perversa."
          price="9,99€"
          image={laPerversaImage}
          imageSize="large"
        />
        <MenuItem
          name="Basílica"
          description="Doble smash, tomate seco, mayo con albahaca, brotes, cebolla, queso emmental."
          price="9,99€"
          image={basilicaImage}
          imageSize="large"
        />
        <MenuItem
          name="Porkiña"
          description="Doble smash, doble queso americano, cebolla encurtida, tira de bacon, salsa cheddar y mayonesa sweet chilli."
          price="9,99€"
          image={porquinaBurger}
          imageSize="large"
        />
      </MenuSection>

      {/* SMASH BURGERS - VÍDEO */}
      <VideoSection
        videoUrl={burgerVideo}
        title="Smash It"
        subtitle="DOBLE DE CARNE, DOBLE DE PERVERSIÓN"
      />

      <LeopardDivider />

      {/* EXTRAS */}
      <MenuSection
        id="extras"
        title="Para Picar"
        subtitle="Para quien piense que las hamburguesas no son suficientes (te entendemos)"
      >
        <p className="text-muted-foreground font-body text-[10px] sm:text-xs md:text-sm mb-4 tracking-wide uppercase text-center">No hagas tratos con alguien que no pide patatas</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="h-full"><MenuItem name="Patatas Normales" description="Crujientes y doradas." price="2,70€" image={patatasImage} imageSize="large" /></div>
          <div className="h-full"><MenuItem name="Patatas Bacon Cheddar" description="Con bacon crispy y salsa cheddar." price="4,00€" image={cheddarbaconImage} imageSize="large" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
          <div className="h-full"><MenuItem name="Patatas Gajo" description="Corte rústico, perfectamente especiadas." price="3,00€" image={gajoImage} imageSize="extra-large" /></div>
          <div className="h-full"><MenuItem name="Croquetas de Jamón" description="8 unidades. Caseras y cremosas." price="7,00€" image={croquetasImage} imageSize="large" /></div>
        </div>
        <MenuItem
          name="Croquetas Cecina y San Simón"
          description="8 unidades. Cecina y queso San Simón ahumado."
          price="8,50€"
        />
      </MenuSection>

      <LeopardDivider />

      {/* POSTRES */}
      <MenuSection
        id="postres"
        title="Postres"
      >
        <MenuItem
          name="Cheesecake Frutos Rojos"
          description="Con mermelada de frutos rojos casera."
          price="5,00€"
        />
        <MenuItem name="Cheesecake Oreo" description="Cremosa base con galleta Oreo." price="5,00€" image={tarta2Image} imageSize="large" />
        <MenuItem name="Cheesecake Lotus" description="Con crema de galleta Lotus." price="5,00€" image={tarta1Image} imageSize="large" />
      </MenuSection>

      <LeopardDivider />

      {/* BEBIDAS */}
      <MenuSection id="bebidas" title="Bebidas">
        {/* Refrescos */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-primary mb-4 sm:mb-6 font-semibold text-center">Refrescos</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 items-stretch">
            <div className="h-full"><MenuItem name="Coca-Cola" description="" price="2,9€" image={cocaCola} imageSize="large" /></div>
            <div className="h-full"><MenuItem name="Sprite" description="" price="2,9€" image={sprite} imageSize="large" /></div>
            <div className="h-full"><MenuItem name="Aquarius Limón" description="" price="2,9€" image={aquariusLimon} imageSize="large" /></div>
            <div className="h-full" style={{marginTop: '30%'}}><MenuItem name="Aquarius Naranja" description="" price="2,9€" image={aquariusNaranja} imageSize="medium" /></div>
            <div className="h-full"><MenuItem name="mangoloco 25cl" description="" price="2,9€" image={mangoLoco} imageSize="large" /></div>
            <div className="h-full" style={{marginTop: '30%'}}><MenuItem name="monster 25cl" description="" price="2,9€" image={monster} imageSize="medium" /></div>
            <div className="h-full"><MenuItem name="Fanta Limón" description="" price="2,9€" image={fantaLimon} imageSize="large" /></div>
            <div className="h-full"><MenuItem name="Fanta Naranja" description="" price="2,9€" image={fantaNaranja} imageSize="large" /></div>
            <div className="h-full"><MenuItem name="Fuze Tea" description="" price="2,9€" image={fuzeTea} imageSize="large" /></div>
          </div>
        </div>
        <RotatingText 
          phrases={[
            "El 99% de nuestros clientes afirma que sin bebida nuestra comida se les hace bola",
            "Si no pides bebida, te va a costar tragar la hamburguesa",
            "El repartidor dice que tu casa huele a pies"
          ]}
          className="text-muted-foreground font-body text-[10px] sm:text-xs md:text-sm mt-4 sm:mt-6 tracking-wide uppercase text-center max-w-lg mx-auto"
        />
      </MenuSection>

      {/* SALSAS */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary font-bold mb-4 sm:mb-6">Salsas +0,50€</h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {["salsa garlic", "Mayo", "Ketchup", "Sweet Chilli", "Miel Mostaza", "Salsa Cheddar", "Mayo Albahaca", "Mayo Cítrica"].map(
              (salsa) => (
                <span
                  key={salsa}
                  className="font-body text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] text-foreground bg-muted px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm hover:bg-primary/20 transition-colors cursor-default"
                >
                  {salsa}
                </span>
              )
            )}
          </div>
          <div className="mt-6 sm:mt-8">
            <p className="font-body text-[10px] sm:text-xs md:text-sm text-muted-foreground tracking-wide max-w-lg mx-auto">
              Extras: Bacon +1€ · Huevo +1€ · Bacon Crispy +1€ · Cebolla Caramelizada +1€
            </p>
          </div>
        </div>
      </section>

      <LeopardDivider />

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
