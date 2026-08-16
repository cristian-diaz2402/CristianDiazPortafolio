<template>
  <section class="mt-20 px-4 xl:px-16 py-16" id="contact">
    <div class="max-w-2xl mx-auto" data-aos="fade-up">

      <h2 class="font-syne text-4xl font-bold text-dark mb-4">Contacto</h2>
      <p class="font-inter text-muted mb-10 leading-relaxed">
        Disponible para oportunidades laborales, colaboraciones técnicas o consultas sobre proyectos. Puedes escribirme directamente por cualquiera de estos canales.
      </p>

      <div class="flex flex-col gap-6">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Icon icon="lucide:mail" width="20" class="text-primary" />
          </div>
          <div>
            <h4 class="font-syne font-semibold text-dark text-sm uppercase">Email</h4>
            <a href="mailto:dannycriss12@gmail.com" class="font-inter text-muted text-sm hover:text-primary transition-colors">
              dannycriss12@gmail.com
            </a>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Icon icon="lucide:linkedin" width="20" class="text-primary" />
          </div>
          <div>
            <h4 class="font-syne font-semibold text-dark text-sm uppercase">LinkedIn</h4>
            <a href="https://www.linkedin.com/in/cristian-diaz-50ab862aa" target="_blank"
              class="font-inter text-sm text-primary hover:opacity-70 transition-opacity">
              cristian-diaz-50ab862aa
            </a>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Icon icon="lucide:github" width="20" class="text-primary" />
          </div>
          <div>
            <h4 class="font-syne font-semibold text-dark text-sm uppercase">GitHub</h4>
            <a href="https://github.com/cristian-diaz2402" target="_blank"
              class="font-inter text-sm text-primary hover:opacity-70 transition-opacity">
              cristian-diaz2402
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>