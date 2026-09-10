<template>
  <header
    class="flex justify-between items-center px-6 py-4 relative z-20 transition-all duration-300 bg-background"
    :class="isScrolled ? 'shadow-sm' : ''"
  >
    <div class="font-syne text-2xl font-bold text-primary">
      Cristian Díaz
    </div>

    <div class="md:hidden z-30">
      <button type="button" aria-label="Menú de Navegación" class="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm" @click="isMenuOpen = !isMenuOpen">
        <Icon v-if="isMenuOpen" icon="lucide:x" width="28" height="28" class="text-dark" />
        <Icon v-else icon="lucide:menu" width="28" height="28" class="text-dark" />
      </button>
    </div>

    <nav
      class="fixed inset-0 z-20 flex-col items-center justify-center bg-background md:relative md:inset-auto md:flex md:flex-row"
      :class="isMenuOpen ? 'flex' : 'hidden md:flex'"
    >
      <ul class="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-8">
        <li v-for="item in Menu" :key="item.name">
          <a :href="item.href" class="font-inter block text-2xl md:text-base font-medium text-dark transition-all ease-linear hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-sm" @click="scrollToSection(item.href)">{{ item.name }}</a>
        </li>
        <li>
          <a href="#contact" class="font-inter px-5 py-2 rounded-full text-base font-medium bg-primary text-white transition-all hover:opacity-80 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none focus-visible:ring-offset-2" @click="scrollToSection('#contact')">{{ $t('nav.contact') }}</a>
        </li>
        <li class="pt-4 md:pt-0">
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './LanguageSwitcher.vue';

const { t } = useI18n();

const Menu = computed(() => [
  { name: t('nav.about'), href: '#about' },
  { name: t('nav.experience'), href: '#experience' },
  { name: t('nav.skills'), href: '#skills' },
  { name: t('nav.projects'), href: '#projects' },
]);

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const scrollToSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>