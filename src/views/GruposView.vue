<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppSidebar from '@/components/AppSidebar.vue'
import BuscadorBar from '@/components/BuscadorBar.vue'

const router = useRouter()
const busqueda = ref('')
const grupos = ref([
  { id: 1, nombre: 'Familia', personas: 7 },
  { id: 2, nombre: 'Trabajo', personas: 15 },
  { id: 3, nombre: 'Amigos', personas: 5 },
])
const visibles = () => grupos.value.filter((grupo) => grupo.nombre.toLowerCase().includes(busqueda.value.toLowerCase()))
const menuAbierto = ref<number | null>(null)
</script>

<template>
  <AppSidebar />
  <main class="min-h-full bg-neutral-secondary-soft p-6 sm:ml-64">
    <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
      <h1 class="text-2xl font-semibold text-heading">Grupos</h1>
      <button type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" @click="router.push('/grupos/crear')">Crear grupo</button>
    </div>
    <div class="mb-6"><BuscadorBar v-model="busqueda" placeholder="Buscar grupos" /></div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <article v-for="grupo in visibles()" :key="grupo.id" class="relative bg-neutral-primary-soft border border-default rounded-base shadow-xs p-5">
        <div class="flex items-start justify-between gap-3">
          <div><h2 class="text-lg font-semibold text-heading">{{ grupo.nombre }}</h2><p class="text-sm text-body mt-1">{{ grupo.personas }} personas</p></div>
          <button type="button" :aria-label="`Opciones de ${grupo.nombre}`" :aria-expanded="menuAbierto === grupo.id" class="shrink-0 text-heading bg-neutral-primary-soft box-border border border-default-medium hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium rounded-base p-2 focus:outline-none" @click="menuAbierto = menuAbierto === grupo.id ? null : grupo.id">⋮</button>
        </div>
        <div v-if="menuAbierto === grupo.id" class="absolute right-4 top-14 z-10 bg-neutral-primary-soft border border-default rounded-base shadow-sm p-2 min-w-36">
          <button type="button" class="w-full text-left text-sm text-heading hover:bg-neutral-tertiary rounded-base px-3 py-2" @click="router.push('/alarmas/crear')">Crear alarma</button>
          <button type="button" class="w-full text-left text-sm text-heading hover:bg-neutral-tertiary rounded-base px-3 py-2" @click="menuAbierto = null">Ver integrantes</button>
        </div>
      </article>
    </div>
    <p v-if="!visibles().length" class="text-body mt-4">No hay grupos que coincidan con la búsqueda.</p>
  </main>
</template>
