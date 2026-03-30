import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import MenuItem from "@/components/MenuItem";
import LeopardDivider from "@/components/LeopardDivider";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import sidesPhoto from "@/assets/dessert-photo.jpg";
import dessertPhoto from "@/assets/dessert-photo.jpg";
import basilicaBurger from "@/assets/basilica-burger.png";
import porquinaBurger from "@/assets/porquina-burger.png";
import laCabraBurger from "@/assets/la-cabra-burger.jpg";
import burgerVideo from "@/assets/burger-video.mp4";
import cocaCola from "@/assets/coca-cola.png";
import sprite from "@/assets/sprite.png";
import aquariusNaranja from "@/assets/acuarius-naranja.png";
import mangoLoco from "@/assets/mango-loco.png";
import fuzeTea from "@/assets/fuze-tea.jpg";
import estrellaGalicia from "@/assets/estrella-galicia.png";
import milnueve from "@/assets/milnueve.png";
import logoPerversa from "@/assets/logo-perversa.png";
import perversionImage from "@/assets/perversión.jpg";
import logoSilhouette from "@/assets/logo-circle.png";
import siluetaImage from "@/assets/silueta.png";
import basilicaImage from "@/assets/basílica.jpeg";
import patatasImage from "@/assets/patatas.png";
import gajoImage from "@/assets/gajo.png";
import gajoCheddarImage from "@/assets/gajo-cheddar.png";
import baconCheddarImage from "@/assets/bacon-cheddar.png";
import laPerversaImage from "@/assets/la-perversa.jpeg";
import ayCarambaImage from "@/assets/ay-caramba.jpeg";
import croquetasImage from "@/assets/croquetas.png";
import cheddarbaconImage from "@/assets/cheddarbacon.png";

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
          image={laCabraBurger}
          imageSize="large"
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
          description="Carne, queso cheddar, guacamole, pico de Gallo, lechuga, salsa chipotle, jalapeños."
          price="9,99€"
          image={ayCarambaImage}
          imageSize="large"
        />
        <MenuItem
          name="Pollo Crujiente"
          description="Pollo rebozado en cornflakes, tomate, salsa cheddar y tira de bacon, cebolla encurtida."
          price="9,99€"
        />
      </MenuSection>

      {/* SMASH BURGERS - IMAGEN */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center">
            <img
              src={perversionImage}
              alt="Perversión"
              className="w-full max-w-2xl aspect-square object-cover rounded-lg shadow-lg"
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
      >
        <MenuItem
          name="La Perversa"
          description="Doble cheeseburger de queso americano con salsa mayo sweet chilli y cebolla encurtida, bacon crispy."
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
          description="Doble de carne, salsa bacon ahumado y cheddar, cebolla caramelizada, tira de bacon, queso americano."
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
        subtitle="Complementa tu experiencia"
      >
        <div className="h-full"><MenuItem name="Patatas Normales" description="Crujientes y doradas." price="2,70€" image={patatasImage} imageSize="large" /></div>
        <div className="h-full"><MenuItem name="Patatas Bacon Cheddar" description="Con bacon crispy y salsa cheddar." price="4,00€" image={cheddarbaconImage} imageSize="large" /></div>
        <div className="h-full"><MenuItem name="Patatas Gajo" description="Corte rústico, perfectamente especiadas." price="3,00€" image={gajoImage} imageSize="extra-large" /></div>
        <div className="h-full"><MenuItem name="Croquetas de Jamón" description="8 unidades. Caseras y cremosas." price="7,00€" image={croquetasImage} imageSize="large" /></div>
        <MenuItem
          name="Croquetas Cecina y San Simón"
          description="8 unidades. Cecina y queso San Simón ahumado."
          price="8,50€"
        />
      </MenuSection>

      <LeopardDivider />

      <VideoSection
        videoUrl="https://videos.pexels.com/video-files/3327220/3327220-uhd_2560_1440_24fps.mp4"
      />

      {/* POSTRES */}
      <MenuSection
        id="postres"
        title="Postres"
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
        {/* Refrescos */}
        <div className="mb-12">
          <h3 className="font-display text-2xl text-primary mb-6 font-semibold text-center">Refrescos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            <div className="h-full"><MenuItem name="Coca-Cola" description="" price="3,00€" image={cocaCola} imageSize="large" /></div>
            <div className="h-full"><MenuItem name="Sprite" description="" price="3,00€" image={sprite} imageSize="medium" /></div>
            <div className="h-full"><MenuItem name="Aquarius Limón" description="" price="3,00€" /></div>
            <div className="h-full"><MenuItem name="Aquarius Naranja" description="" price="3,00€" image={aquariusNaranja} imageSize="medium" /></div>
            <div className="h-full"><MenuItem name="Monster Mangoloco" description="" price="3,00€" image={mangoLoco} imageSize="large" /></div>
            <div className="h-full"><MenuItem name="Fuze Tea" description="" price="3,00€" image={fuzeTea} imageSize="large" /></div>
          </div>
        </div>
        
        {/* Cervezas */}
        <div>
          <h3 className="font-display text-2xl text-primary mb-6 font-semibold text-center">Cervezas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            <div className="h-full"><MenuItem name="Estrella" description="" price="3,50€" image={estrellaGalicia} imageSize="large" /></div>
            <div className="h-full"><MenuItem name="1906" description="" price="3,50€" image={milnueve} imageSize="large" /></div>
          </div>
        </div>
      </MenuSection>

      {/* SALSAS */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-primary font-bold mb-6">Salsas +0,50€</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["salsa garlic", "Mayo", "Ketchup", "Sweet Chilli", "Miel Mostaza", "Salsa Cheddar", "Mayo Albahaca", "Mayo Cítrica"].map(
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
    </div>
  );
};

export default Index;
