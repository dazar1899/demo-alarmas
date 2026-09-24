<script setup lang="ts">
import { ref } from 'vue'
import AppSidebar from '@/components/AppSidebar.vue'
import CalendarioCard from '@/components/CalendarioCard.vue'

const inicio = ref(0)
const meses = [0, 1, 2, 3, 4, 5]
</script>

<template>
  <AppSidebar />
  <main class="min-h-full bg-neutral-secondary-soft p-6 sm:ml-64">
    <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
      <h1 class="text-2xl font-semibold text-heading">Calendario</h1>
      <div class="flex gap-3">
        <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" @click="inicio -= 6">Anteriores</button>
        <button type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" @click="inicio += 6">Siguientes</button>
      </div>
    </div>
    <p class="text-sm text-body mb-5">Los puntos marcan los días con alarmas programadas.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      <CalendarioCard v-for="mes in meses" :key="inicio + mes" :month-offset="inicio + mes" compact />
    </div>
  </main>
</template>
