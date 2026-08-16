<template>
  <footer class="mt-20 border-t border-muted/20">
    <div class="px-4 xl:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="font-syne text-2xl font-bold text-primary">Cristian Díaz</div>

      <div class="flex items-center gap-5">
        <a href="https://github.com/cristian-diaz2402" target="_blank" class="text-muted hover:text-primary transition-colors duration-300">
          <Icon icon="lucide:github" width="20" />
        </a>
        <a href="https://www.linkedin.com/in/cristian-diaz-50ab862aa" target="_blank" class="text-muted hover:text-primary transition-colors duration-300">
          <Icon icon="lucide:linkedin" width="20" />
        </a>
        <a href="mailto:dannycriss12@gmail.com" class="text-muted hover:text-primary transition-colors duration-300">
          <Icon icon="lucide:mail" width="20" />
        </a>
      </div>

      <p class="font-inter text-sm text-muted">© 2026 Cristian Díaz. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>