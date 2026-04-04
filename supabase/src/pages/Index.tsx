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
import porquinaBurger from "@/assets/porkina.png";
import laCabraBurger from "@/assets/la-cabra-burger.jpg";
import burgerVideo from "@/assets/burger-video.mp4";
import cocaCola from "@/assets/coca-cola.png";
import sprite from "@/assets/sprite.png";
import aquariusNaranja from "@/assets/aquarius-naranja.png";
import aquariusLimon from "@/assets/aquarius.png";
import mangoLoco from "@/assets/mango-loco.png";
import fuzeTea from "@/assets/fuze-tea.jpg";
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
          description="Hamburguesa de pollo, queso americano, cebolla caramelizada, tira de bacon y salsa cheddar."
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
        siluetaImage={siluetaImage}
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
        subtitle="Para quien piense que las hamburguesas no son suficientes (te entendemos)"
      >
        <p className="text-muted-foreground font-body text-xs sm:text-sm mb-4 tracking-wide uppercase text-center">No hagas tratos con alguien que no pide patatas</p>
        <div className="h-full"><MenuItem name="Patatas Normales" description="Crujientes y doradas." price="2,70€" image={patatasImage} imageSize="large" /></div>
        <div className="h-full"><MenuItem name="Patatas Bacon Cheddar" description="Con bacon crispy y salsa cheddar." price="4,00€" image={cheddarbaconImage} imageSize="large" style={{marginLeft: '1.5cm'}} /></div>
        <div className="h-full"><MenuItem name="Patatas Gajo" description="Corte rústico, perfectamente especiadas." price="3,00€" image={gajoImage} imageSize="extra-large" /></div>
        <div className="h-full"><MenuItem name="Croquetas de Jamón" description="8 unidades. Caseras y cremosas." price="7,00€" image={croquetasImage} imageSize="large" /></div>
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
          price="2,50€"
          priceOld="5,50€"
        />
        <MenuItem name="Cheesecake Oreo" description="Cremosa base con galleta Oreo." price="2,50€" priceOld="5,00€" />
        <MenuItem name="Cheesecake Lotus" description="Con crema de galleta Lotus." price="2,50€" priceOld="5,00€" />
      </MenuSection>

      <LeopardDivider />

      {/* BEBIDAS */}
      <MenuSection id="bebidas" title="Bebidas">
        {/* Refrescos */}
        <div className="mb-12">
          <h3 className="font-display text-2xl text-primary mb-6 font-semibold text-center">Refrescos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            <div className="h-full"><MenuItem name="Coca-Cola" description="" price="3,00€" image={cocaCola} imageSize="large" /></div>
            <div className="h-full"><MenuItem name="Sprite" description="" price="3,00€" image={sprite} imageSize="large" /></div>
            <div className="h-full"><MenuItem name="Aquarius Limón" description="" price="3,00€" image={aquariusLimon} imageSize="large" /></div>
            <div className="h-full"><MenuItem name="Aquarius Naranja" description="" price="3,00€" image={aquariusNaranja} imageSize="medium" /></div>
            <div className="h-full"><MenuItem name="Monster Mangoloco" description="" price="3,00€" image={mangoLoco} imageSize="large" /></div>
            <div className="h-full"><MenuItem name="Fuze Tea" description="" price="3,00€" image={fuzeTea} imageSize="large" /></div>
          </div>
        </div>
        <p className="text-muted-foreground font-body text-xs sm:text-sm mt-6 tracking-wide uppercase text-center">El 99% de nuestros clientes afirma que sin bebida nuestra comida se les hace bola</p>
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
