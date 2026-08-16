<template>
  <section class="relative w-full min-h-screen flex items-center" data-aos="zoom-in-up">
    <div class="absolute top-0 inset-x-0 h-64 flex items-start pointer-events-none">
      <div class="h-24 w-2/3 blur-3xl opacity-20 bg-gradient-to-br from-primary to-secondary"></div>
      <div class="h-20 w-3/5 blur-3xl opacity-15 bg-gradient-to-r from-secondary to-primary"></div>
    </div>

    <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
      <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">

        <div class="lg:py-6 flex flex-col justify-center">

          <h1 class="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-dark leading-tight">
            Cristian Díaz
            <span class="block text-primary text-2xl md:text-3xl lg:text-4xl mt-2">Frontend Developer · Calidad E2E</span>
          </h1>

          <div class="flex flex-wrap gap-2 mt-5">
            <span class="font-inter text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">Vue.js</span>
            <span class="font-inter text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">React</span>
            <span class="font-inter text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">Playwright</span>
            <span class="font-inter text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">GitHub Actions</span>
            <span class="font-inter text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">FastAPI</span>
          </div>

          <p class="font-inter pt-6 text-justify max-w-xl text-muted leading-relaxed">
            Ingeniero en Ciencias de la Computación recién egresado de la EPN, con dos años de experiencia real en producción en Wanqara. Desarrollé módulos frontend activos con Vue.js y tomé ownership de la suite E2E completa con Playwright: arquitectura de tests, pipelines de CI en GitHub Actions y resolución de race conditions entre entornos. Me especializo en construir interfaces sólidas y en garantizar que lleguen a producción sin errores.
          </p>

          <div class="flex items-center gap-4 pt-8 flex-col sm:flex-row">
            <a href="#projects"
              class="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-inter font-medium hover:opacity-80 transition-all duration-300">
              <Icon icon="lucide:folder-open" width="18" />
              Ver Proyectos
            </a>
            <a href="/HojaDeVidaProfesion.pdf" download="DiazCristianCurriculum.pdf"
              class="flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-inter font-medium hover:bg-primary hover:text-white transition-all duration-300">
              <Icon icon="lucide:download" width="18" />
              Descargar CV
            </a>
          </div>

          <div class="flex items-center gap-5 pt-8">
            <a href="https://github.com/cristian-diaz2402" target="_blank" class="text-muted hover:text-primary transition-colors duration-300">
              <Icon icon="lucide:github" width="22" />
            </a>
            <a href="https://www.linkedin.com/in/cristian-diaz-50ab862aa" target="_blank" class="text-muted hover:text-primary transition-colors duration-300">
              <Icon icon="lucide:linkedin" width="22" />
            </a>
            <a href="mailto:dannycriss12@gmail.com" class="text-muted hover:text-primary transition-colors duration-300">
              <Icon icon="lucide:mail" width="22" />
            </a>
          </div>
        </div>

        <div class="flex items-center justify-center">
          <div class="relative w-72 h-72 lg:w-96 lg:h-96">
            <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-10 blur-2xl"></div>
            <div class="relative w-full h-full rounded-full border-2 border-primary/30 overflow-hidden shadow-xl bg-surface flex items-center justify-center">
              <span class="font-syne font-bold text-7xl lg:text-9xl text-primary select-none">CD</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
</script>