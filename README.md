# La Perversa - Hamburguesería Gourmet

Sitio web de La Perversa, hamburguesería gourmet especializada en burgers y smash burgers.

## 🚀 Despliegue Rápido con Cascade

### Opción 1: Despliegue Automático
```bash
# Clone el repositorio
git clone [URL-del-repositorio]
cd "LA PERVERSA/web perversa"

# Inicie el servidor de desarrollo
cd supabase
npm install
npm run dev

# Acceda a http://localhost:8080
```

### Opción 2: Configuración Manual
1. **Instalar dependencias:**
   ```bash
   cd supabase
   npm install
   ```

2. **Iniciar desarrollo:**
   ```bash
   npm run dev
   # Acceder a http://localhost:8080
   ```

3. **Build para producción:**
   ```bash
   npm run build
   # Los archivos se generan en supabase/dist/
   ```

## 🎨 Características Principales

### ✨ Elementos Visuales
- **Hero Section**: Logo animado + texto motivacional
- **LeopardDivider**: Separadores con patrón de leopardo
- **Imágenes Grandes**: Todos los productos con imágenes optimizadas
- **Videos**: Secciones con video de hamburguesas
- **Elementos Decorativos**: Puntos y líneas sutiles

### 📱 Secciones
1. **Hamburguesas Clásicas**: La Cabra, Ay Caramba, Pollo Crujiente
2. **Smash Burgers**: Imagen perversión + catálogo + video
3. **Para Picar**: Patatas, croquetas
4. **Postres**: Cheesecakes variados
5. **Bebidas**: Refrescos y cervezas

### 🎭 Personalidad de Marca
- **Textos Irreverentes**: Frases humorísticas y provocadoras
- **Diseño Atrevido**: Colores vibrantes y tipografías audaces
- **Experiencia Única**: Elementos interactivos y sorpresas

## 🛠️ Tecnologías

- **Frontend**: React + TypeScript + Vite
- **Estilos**: Tailwind CSS + shadcn/ui
- **Componentes**: Radix UI
- **Estado**: React Query
- **Rutas**: React Router

## 🌐 Despliegue

### Desarrollo
```bash
npm run dev    # http://localhost:8080
```

### Producción
```bash
npm run build  # Genera en supabase/dist/
npm run preview  # Previsualización del build
```

### Hosting Compatible
- ✅ Vercel
- ✅ Netlify  
- ✅ GitHub Pages
- ✅ Cualquier hosting estático

## 🎯 Para Cascade

Esta web está optimizada para ser añadida a Cascade con:

- **Configuración automática** via `cascade-config.json`
- **Build rápido** (< 5 segundos)
- **Preview en vivo** en http://localhost:8080
- **Assets optimizados** para producción
- **Responsive design** para todos los dispositivos

## 📊 Assets Utilizados

### Imágenes Principales
- `logo-circle.png` - Logo circular
- `logo-perversa.png` - Logo de la marca
- `perversión.jpg` - Imagen conceptual Smash
- Hamburguesas: La Cabra, Basílica, La Perversa, etc.
- Bebidas: Coca-Cola, Sprite, Estrella, etc.

### Videos
- `burger-video.mp4` - Video de hamburguesas

### Patrones
- `leopard-pattern.jpg` - Separador visual

## 📝 Notas Adicionales

- **Sin backend**: Web completamente estática
- **Sin variables de entorno**: Configuración cero
- **Rápida carga**: Optimizada para velocidad
- **SEO ready**: Metadatos y estructura semántica

---

**¡Listo para desplegar en Cascade! 🚀**
