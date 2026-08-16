<template>
  <section class="mt-20 px-4 xl:px-16 py-16" id="experience">
    <h2 class="font-syne text-4xl font-bold text-dark mb-10">
      <span class="text-primary">Experiencia</span> Profesional
    </h2>

    <div class="flex flex-col gap-8">
      <div v-for="job in experience" :key="job.id" data-aos="fade-up"
        class="rounded-2xl bg-surface border border-muted/20 shadow-sm p-6 hover:border-primary/30 transition-all duration-300">

        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 class="font-syne text-xl font-bold text-dark">{{ job.role }}</h3>
            <p class="font-inter text-primary font-medium text-sm mt-0.5">{{ job.company }}</p>
          </div>
          <div class="flex flex-col items-start sm:items-end gap-1 shrink-0">
            <span class="font-inter text-xs text-muted bg-muted/10 px-3 py-1 rounded-full">{{ job.period }}</span>
            <span class="font-inter text-xs text-muted">{{ job.type }}</span>
          </div>
        </div>

        <p class="font-inter text-muted text-sm leading-relaxed mb-4">{{ job.description }}</p>

        <div class="flex flex-wrap gap-2">
          <span v-for="tech in job.stack" :key="tech"
            class="font-inter text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
            {{ tech }}
          </span>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const experience = ref([
  {
    id: 1,
    role: 'Frontend Developer · QA Automation',
    company: 'Wanqara — Facturación Electrónica (Ecuador)',
    period: 'Jun 2024 — Actualidad · 2 años 2 meses',
    type: 'Servicios prestados · Remoto',
    description: 'Desarrollé dos módulos frontend hoy en producción activa con clientes reales: Comandas KDS, sistema de gestión de órdenes para cocina en tiempo real; y Visor Comercial, pantalla de estado para clientes en punto de venta. Diseñé desde cero la suite E2E con Playwright —más de 20 tests de regresión— con separación de smoke tests por push a develop y regresión completa por merge a main. Configuré el pipeline de CI en GitHub Actions con control de concurrencia y API_TIMEOUT diferenciado entre entornos. Identifiqué y resolví race conditions en waitForResponse registrando los listeners antes del click en lugar de concurrentemente, eliminando falsos negativos intermitentes en CI.',
    stack: ['Vue.js', 'Pinia', 'TanStack Query', 'Playwright', 'GitHub Actions']
  },
  {
    id: 2,
    role: 'Frontend Developer · Freelance',
    company: 'AntsOfEcuador — Freelance (Ecuador)',
    period: 'May 2025 — Jul 2025 · 2 meses',
    type: 'Freelance · Proyecto completado',
    description: 'Construí y entregué en producción una plataforma de registro científico de especies de hormigas en Ecuador, reemplazando un flujo manual en hojas de cálculo. Diseñé el pipeline de importación Excel con validación taxonómica contra AntCat antes de persistir en base de datos, evitando que registros erróneos contaminaran el dataset científico. Implementé visualización geoespacial con D3.js segmentada por regiones del país. Proyecto entregado en 2 meses, en uso activo por el equipo investigador.',
    stack: ['React', 'Tailwind CSS', 'D3.js', 'FastAPI', 'Python', 'PostgreSQL']
  }
]);
</script>