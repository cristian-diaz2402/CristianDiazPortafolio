<template>
  <section class="mt-20 px-4 xl:px-16 py-16" id="about">
    <div class="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-start">

      <div data-aos="fade-right">
        <h2 class="font-syne text-4xl font-bold text-dark mb-6">
          {{ $t('about.title') }}
        </h2>
        <p class="font-inter text-muted leading-relaxed mb-4">
          {{ $t('about.p1') }}
        </p>
        <p class="font-inter text-muted leading-relaxed mb-4">
          {{ $t('about.p2') }}
        </p>
        <p class="font-inter text-muted leading-relaxed">
          {{ $t('about.p3') }}
        </p>
      </div>

      <div data-aos="fade-left">
        <h2 class="font-syne text-4xl font-bold text-dark mb-6">
          {{ $t('about.title2') }}
        </h2>

        <div class="flex items-center gap-4 mb-6">
          <img
            src="https://redi.cedia.edu.ec/members/EPN.png"
            alt="Escuela Politécnica Nacional"
            class="h-10 w-auto object-contain shrink-0"
          />
          <div>
            <p class="font-syne text-sm font-semibold text-primary uppercase leading-snug">{{ $t('about.edu_inst') }}</p>
            <p class="font-inter text-sm text-dark">{{ $t('about.edu_degree') }}</p>
            <p class="font-inter text-xs text-muted mt-0.5">{{ $t('about.edu_date') }}</p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div class="rounded-2xl bg-surface border border-muted/20 shadow-sm px-4 py-4 flex flex-col gap-1">
            <span class="font-syne text-2xl font-bold text-primary">2+</span>
            <span class="font-inter text-xs text-muted leading-snug">{{ $t('about.metrics.m1') }}</span>
          </div>
          <div class="rounded-2xl bg-surface border border-muted/20 shadow-sm px-4 py-4 flex flex-col gap-1">
            <span class="font-syne text-2xl font-bold text-primary">8</span>
            <span class="font-inter text-xs text-muted leading-snug">{{ $t('about.metrics.m2') }}</span>
          </div>
          <div class="rounded-2xl bg-surface border border-muted/20 shadow-sm px-4 py-4 flex flex-col gap-1">
            <span class="font-syne text-2xl font-bold text-primary">20+</span>
            <span class="font-inter text-xs text-muted leading-snug">{{ $t('about.metrics.m3') }}</span>
          </div>
          <div class="rounded-2xl bg-surface border border-muted/20 shadow-sm px-4 py-4 flex flex-col gap-1">
            <span class="font-syne text-2xl font-bold text-primary">26k</span>
            <span class="font-inter text-xs text-muted leading-snug">{{ $t('about.metrics.m4') }}</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>