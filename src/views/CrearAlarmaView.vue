<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppSidebar from '@/components/AppSidebar.vue'

const router = useRouter()
const tipo = ref<'Personal' | 'Grupal'>('Personal')
const grupo = ref('Familia')
const hora = ref('05:00')
const descripcion = ref('')
const fecha = ref('')
const guardada = ref(false)

function crear() {
  if (!descripcion.value.trim() || !fecha.value) return
  guardada.value = true
  window.setTimeout(() => router.push('/inicio'), 700)
}
</script>

<template>
  <AppSidebar />
  <main class="min-h-full bg-neutral-secondary-soft p-6 sm:ml-64">
    <h1 class="text-2xl font-semibold text-heading mb-6">Crear alarma</h1>
    <form class="max-w-xl bg-neutral-primary-soft border border-default rounded-base shadow-xs p-6" @submit.prevent="crear">
      <label for="hora" class="block mb-2.5 text-sm font-medium text-heading">Hora</label>
      <input id="hora" v-model="hora" type="time" class="bg-neutral-secondary-medium border border-default-medium text-heading text-xl rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs mb-5" required />
      <label for="tipo" class="block mb-2.5 text-sm font-medium text-heading">Tipo</label>
      <select id="tipo" v-model="tipo" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs mb-5"><option>Personal</option><option>Grupal</option></select>
      <div v-if="tipo === 'Grupal'"><label for="grupo" class="block mb-2.5 text-sm font-medium text-heading">Grupo</label><select id="grupo" v-model="grupo" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs mb-5"><option>Familia</option><option>Trabajo</option><option>Amigos</option></select></div>
      <label for="descripcion" class="block mb-2.5 text-sm font-medium text-heading">Descripción</label>
      <input id="descripcion" v-model="descripcion" type="text" placeholder="Ej. Hacer ejercicio" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body mb-5" required />
      <label for="fecha" class="block mb-2.5 text-sm font-medium text-heading">Fecha</label>
      <input id="fecha" v-model="fecha" type="date" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs mb-6" required />
      <p v-if="guardada" role="status" class="text-fg-brand mb-4">Alarma creada en la demostración.</p>
      <div class="flex justify-end gap-3"><button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" @click="router.push('/inicio')">Cancelar</button><button type="submit" class="text-white bg-brand box-border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Crear</button></div>
    </form>
  </main>
</template>
