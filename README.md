# La Perversa - Hamburguesería Gourmet

Sitio web de La Perversa, hamburguesería gourmet especializada en burgers y smash burgers.

## Tecnologías

- **Frontend**: React + TypeScript + Vite
- **Estilos**: Tailwind CSS + shadcn/ui
- **Componentes**: Radix UI
- **Estado**: React Query
- **Rutas**: React Router

## Despliegue

### Desarrollo Local

```bash
# Instalar dependencias
cd supabase && npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Despliegue en Vercel

1. Conectar este repositorio a Vercel
2. Vercel detectará automáticamente que es un proyecto React/Vite
3. La configuración está en `vercel.json`

## Estructura

```
├── supabase/           # Código fuente de la aplicación
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
├── vercel.json        # Configuración de Vercel
└── package.json       # Configuración raíz
```
