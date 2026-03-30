# Instrucciones para añadir la imagen de La Cabra

## Pasos para añadir la imagen real:

1. **Guarda la imagen** que enviaste en esta carpeta:
   ```
   c:/Users/rodri/OneDrive/Imágenes/fotografías/LA PERVERSA/web perversa/supabase/src/assets/la-cabra-burger.jpg
   ```

2. **Una vez guardada**, cambia esta línea en `src/pages/Index.tsx`:
   ```typescript
   // Cambia esto:
   import laCabraBurger from "@/assets/basilica-burger.png";
   
   // Por esto:
   import laCabraBurger from "@/assets/la-cabra-burger.jpg";
   ```

3. **La imagen aparecerá automáticamente** en el menú de hamburguesas.

## Estado actual:
- ✅ Código configurado para mostrar imagen
- ✅ Componente La Cabra listo con `image={laCabraBurger}`
- ⏳ Esperando imagen real para reemplazar placeholder
