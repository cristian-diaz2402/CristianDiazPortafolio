<template>
  <div class="bg-background min-h-screen overflow-x-hidden w-full">
    <Suspense>
      <template #default>
        <div class="overflow-x-hidden">
          <NavBar />
          <HeroSection />
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
        <div class="flex justify-center items-center min-h-screen">
          <loadingSpinner />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));
const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'));
const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'));
const ExperienceSection = defineAsyncComponent(() => import('@/components/ExperienceSection.vue'));
const LatestProjSection = defineAsyncComponent(() => import('@/components/LatestProjSection.vue'));
const ExperienceAndSkills = defineAsyncComponent(() => import('@/components/ExperienceAndSkills.vue'));
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'));
const AppFooter = defineAsyncComponent(() => import('@/components/AppFooter.vue'));
const BackToTop = defineAsyncComponent(() => import('@/components/BackToTop.vue'));
import loadingSpinner from './components/loadingSpinner.vue';
</script>

<style>
* {
  scrollbar-width: thin;
  scrollbar-color: theme('colors.primary') #e2e8f0;
}
</style>