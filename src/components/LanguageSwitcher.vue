<template>
  <button 
    @click="toggleLanguage" 
    class="flex items-center gap-2 px-3 py-1.5 rounded-full border border-muted/30 text-dark bg-surface hover:border-primary hover:text-primary transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none focus-visible:ring-offset-2"
    :aria-label="currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español'"
  >
    <Icon icon="lucide:globe" width="18" />
    <span class="font-inter text-sm font-medium uppercase">{{ currentLang }}</span>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Icon } from '@iconify/vue';

const { locale } = useI18n();

const currentLang = computed(() => locale.value);

const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es';
};
</script>
