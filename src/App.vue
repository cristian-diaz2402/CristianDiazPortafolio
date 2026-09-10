<template>
  <div class="bg-background min-h-screen overflow-x-hidden w-full">
    <div class="overflow-x-hidden">
      <NavBar />
      <HeroSection />
      
      <Suspense>
        <template #default>
          <div>
            <AboutSection />
            <ExperienceSection />
            <LatestProjSection />
            <ExperienceAndSkills />
            <ContactSection />
            <AppFooter />
            <BackToTop />
          </div>
        </template>
        <template #fallback>
          <div class="flex justify-center items-center py-20">
            <loadingSpinner />
          </div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import NavBar from '@/components/NavBar.vue';
import HeroSection from '@/components/HeroSection.vue';
import loadingSpinner from './components/loadingSpinner.vue';

const { locale } = useI18n();

watchEffect(() => {
  const isEn = locale.value === 'en';
  
  document.title = isEn 
    ? 'Cristian Díaz | Full Stack Developer' 
    : 'Cristian Díaz | Desarrollador Full Stack';

  const desc = isEn 
    ? 'Portfolio of Cristian Díaz — Computer Science Engineer (EPN), Full Stack Developer specialized in Vue.js, React, and FastAPI.'
    : 'Portafolio de Cristian Díaz — Ingeniero en Ciencias de la Computación (EPN), Desarrollador Full Stack especializado en Vue.js, React y FastAPI.';
    
  const setMeta = (selector, content) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('content', content);
  };

  setMeta('meta[name="description"]', desc);
  setMeta('meta[property="og:description"]', desc);
  setMeta('meta[property="og:title"]', document.title);
  document.documentElement.lang = isEn ? 'en' : 'es';
});

import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'));
const ExperienceSection = defineAsyncComponent(() => import('@/components/ExperienceSection.vue'));
const LatestProjSection = defineAsyncComponent(() => import('@/components/LatestProjSection.vue'));
const ExperienceAndSkills = defineAsyncComponent(() => import('@/components/ExperienceAndSkills.vue'));
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'));
const AppFooter = defineAsyncComponent(() => import('@/components/AppFooter.vue'));
const BackToTop = defineAsyncComponent(() => import('@/components/BackToTop.vue'));

onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>

<style>
* {
  scrollbar-width: thin;
  scrollbar-color: theme('colors.primary') #e2e8f0;
}
</style>