<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import AppSidebar from '@/components/AppSidebar.vue'
import BuscadorBar from '@/components/BuscadorBar.vue'
import { amigosIniciales } from '@/data/amigos'

const router = useRouter()
const nombre = ref('')
const busqueda = ref('')
const integrantes = ref<number[]>([])
const modalAbierto = ref(false)
const amigosVisibles = computed(() => amigosIniciales.filter((amigo) => amigo.nombre.toLowerCase().includes(busqueda.value.toLowerCase())))
const integrantesElegidos = computed(() => amigosIniciales.filter((amigo) => integrantes.value.includes(amigo.id)))

function guardar() {
  if (!nombre.value.trim()) return
  router.push('/grupos')
}
</script>

<template>
  <AppSidebar />
  <main class="min-h-full bg-neutral-secondary-soft p-6 sm:ml-64">
    <h1 class="text-2xl font-semibold text-heading mb-6">Crear grupo</h1>
    <div class="max-w-3xl bg-neutral-primary-soft border border-default rounded-base shadow-xs p-6">
      <label for="nombre-grupo" class="block mb-2.5 text-sm font-medium text-heading">Nombre del grupo</label>
      <input id="nombre-grupo" v-model="nombre" type="text" placeholder="Ej. Familia" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full max-w-sm px-3 py-2.5 shadow-xs placeholder:text-body" />
      <h2 class="text-lg font-semibold text-heading mt-8 mb-4">Integrantes</h2>
      <div class="flex flex-wrap gap-3 mb-6">
        <div v-for="amigo in integrantesElegidos" :key="amigo.id" class="flex flex-col items-center gap-2 border border-default rounded-base px-4 py-3 w-28">
          <img :src="amigo.foto" alt="" class="w-12 h-12 rounded-full object-cover" />
          <span class="text-sm text-heading text-center">{{ amigo.nombre }}</span>
        </div>
        <button type="button" class="flex flex-col items-center justify-center border border-dashed border-default-medium hover:bg-neutral-secondary-medium rounded-base px-4 py-3 w-28 min-h-28 text-body" @click="modalAbierto = true"><span class="text-2xl">+</span>Agregar</button>
      </div>
      <div class="flex justify-end gap-3">
        <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" @click="router.push('/grupos')">Cancelar</button>
        <button type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" @click="guardar">Crear grupo</button>
      </div>
    </div>
    <div v-if="modalAbierto" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-label="Agregar amigos al grupo">
      <div class="w-full max-w-lg bg-neutral-primary-soft border border-default rounded-base shadow-sm p-6">
        <h2 class="text-lg font-semibold text-heading mb-4">Agregar amigos al grupo</h2>
        <BuscadorBar v-model="busqueda" placeholder="Buscar amigos" />
        <div class="space-y-2 my-5 max-h-64 overflow-y-auto">
          <label v-for="amigo in amigosVisibles" :key="amigo.id" class="flex items-center gap-3 border border-default rounded-base px-4 py-3 cursor-pointer">
            <input v-model="integrantes" type="checkbox" :value="amigo.id" class="w-5 h-5 border border-default-medium rounded-sm bg-neutral-secondary-medium text-brand focus:ring-2 focus:ring-brand-soft" />
            <img :src="amigo.foto" alt="" class="w-9 h-9 rounded-full object-cover" />
            <span class="text-heading">{{ amigo.nombre }}</span>
          </label>
        </div>
        <div class="flex justify-end gap-3">
          <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" @click="modalAbierto = false">Cancelar</button>
          <button type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" @click="modalAbierto = false">Agregar</button>
        </div>
      </div>
    </div>
  </main>
</template>
