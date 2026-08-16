<template>
  <section class="mt-20 px-4 xl:px-16 py-16" id="skills">
    <div class="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-start">

      <div data-aos="fade-right">
        <h2 class="font-syne text-4xl font-bold text-dark mb-10">
          <span class="text-primary">Stack</span> Principal
        </h2>
        <div class="grid grid-cols-4 sm:grid-cols-5 gap-6">
          <div v-for="skill in skills" :key="skill.id" data-aos="zoom-in-up"
            class="flex flex-col items-center gap-2 p-3 rounded-2xl bg-surface border border-muted/20 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <Icon :icon="skill.icon" width="36" height="36" />
            <span class="font-inter text-xs text-center text-muted font-medium">{{ skill.name }}</span>
          </div>
        </div>
      </div>

      <div class="mt-10 md:mt-0" data-aos="fade-left">
        <h2 class="font-syne text-4xl font-bold text-dark mb-10">
          <span class="text-primary">Infraestructura</span> & Calidad
        </h2>
        <div class="grid grid-cols-1 gap-3">
          <div v-for="element in infraSkills" :key="element.id"
            class="flex items-center gap-4 rounded-2xl px-5 py-4 bg-surface border border-muted/20 shadow-sm hover:border-primary/30 transition-all duration-300">
            <Icon :icon="element.icon" width="22" height="22" class="text-primary shrink-0" />
            <span class="font-inter text-base text-dark font-medium">{{ element.role }}</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const skills = ref([
  { id: 1, icon: 'devicon:vuejs', name: 'Vue.js' },
  { id: 2, icon: 'devicon:react', name: 'React' },
  { id: 3, icon: 'devicon:typescript', name: 'TypeScript' },
  { id: 4, icon: 'devicon:python', name: 'Python' },
  { id: 5, icon: 'devicon:fastapi', name: 'FastAPI' },
  { id: 6, icon: 'devicon:postgresql', name: 'PostgreSQL' },
  { id: 7, icon: 'devicon:tailwindcss', name: 'Tailwind' },
  { id: 8, icon: 'devicon:git', name: 'Git' },
  { id: 9, icon: 'devicon:jira', name: 'Jira' },
]);

const infraSkills = ref([
  { id: 1, role: 'Playwright — Automatización E2E', icon: 'lucide:test-tube-2' },
  { id: 2, role: 'GitHub Actions — CI/CD Pipelines', icon: 'lucide:git-branch' },
  { id: 3, role: 'Ubuntu Linux — Administración de Servidores', icon: 'lucide:terminal' },
  { id: 4, role: 'Nginx & Proxy Inverso', icon: 'lucide:server' },
  { id: 5, role: 'vLLM & Ollama — Inferencia Local de LLMs', icon: 'lucide:brain-circuit' },
  { id: 6, role: 'Render, Netlify & VPS (Hostinger) — Despliegues en la Nube', icon: 'lucide:cloud-upload' },
]);
</script>