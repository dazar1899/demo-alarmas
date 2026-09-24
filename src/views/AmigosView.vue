<script setup lang="ts">
import { computed, ref } from 'vue'
import AppSidebar from '@/components/AppSidebar.vue'
import BuscadorBar from '@/components/BuscadorBar.vue'
import ModalAgregarAmigos from '@/components/ModalAgregarAmigos.vue'
import { amigosIniciales, solicitudesIniciales, sugerenciasIniciales } from '@/data/amigos'
import type { Persona } from '@/data/amigos'

const amigos = ref<Persona[]>([...amigosIniciales])
const solicitudes = ref<Persona[]>([...solicitudesIniciales])
const sugerencias = ref<Persona[]>([...sugerenciasIniciales])
const busqueda = ref('')

const modal = ref<InstanceType<typeof ModalAgregarAmigos> | null>(null)

const amigosVisibles = computed(() => {
  const termino = busqueda.value.trim().toLowerCase()
  if (!termino) return amigos.value
  return amigos.value.filter((a) => a.nombre.toLowerCase().includes(termino))
})

function eliminar(persona: Persona) {
  amigos.value = amigos.value.filter((a) => a.id !== persona.id)
}

function aceptar(persona: Persona) {
  amigos.value = [...amigos.value, persona]
  solicitudes.value = solicitudes.value.filter((s) => s.id !== persona.id)
}

function rechazar(persona: Persona) {
  solicitudes.value = solicitudes.value.filter((s) => s.id !== persona.id)
}

function agregar(personas: Persona[]) {
  amigos.value = [...amigos.value, ...personas]
  sugerencias.value = sugerencias.value.filter((s) => !personas.some((p) => p.id === s.id))
}
</script>

<template>
  <AppSidebar />

  <div class="min-h-full bg-neutral-secondary-soft p-6 sm:ml-64">
    <h1 class="text-2xl font-semibold text-heading mb-6">Amigos</h1>

    <div class="mb-6">
      <BuscadorBar v-model="busqueda" />
    </div>

    <!-- Amigos -->
    <div class="flex flex-wrap gap-4 mb-8">
      <div
        v-for="amigo in amigosVisibles"
        :key="amigo.id"
        class="relative w-40 flex flex-col items-center bg-neutral-primary-soft border border-default rounded-base shadow-xs px-4 py-6"
      >
        <button
          type="button"
          class="absolute -top-2.5 -end-2.5 inline-flex items-center justify-center w-7 h-7 rounded-full text-white bg-danger hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium focus:outline-none"
          @click="eliminar(amigo)"
        >
          <span class="sr-only">Eliminar a {{ amigo.nombre }}</span>
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </button>

        <img class="w-20 h-20 mb-4 rounded-full object-cover" :src="amigo.foto" alt="" />
        <h2 class="text-base font-semibold text-heading text-center">{{ amigo.nombre }}</h2>
      </div>

      <!-- Agregar -->
      <button
        type="button"
        class="w-40 flex flex-col items-center justify-center gap-3 border border-dashed border-default-medium rounded-base px-4 py-6 text-body hover:text-fg-brand hover:border-brand focus:ring-4 focus:ring-brand-medium focus:outline-none"
        @click="modal?.abrir()"
      >
        <svg
          class="w-10 h-10"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <span class="text-base font-semibold text-heading">Agregar</span>
      </button>
    </div>

    <!-- Solicitudes -->
    <h2 class="text-xl font-semibold text-heading mb-4">Solicitudes de Amistad</h2>
    <ul class="space-y-4 max-w-3xl">
      <li
        v-for="solicitud in solicitudes"
        :key="solicitud.id"
        class="flex items-center gap-3 bg-neutral-primary-soft border border-default rounded-base shadow-xs px-4 py-3"
      >
        <img class="w-12 h-12 rounded-full object-cover" :src="solicitud.foto" alt="" />
        <p class="min-w-0 flex-1 text-base font-semibold text-heading truncate">
          {{ solicitud.nombre }}
        </p>

        <button
          type="button"
          class="inline-flex items-center text-white bg-danger box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          @click="rechazar(solicitud)"
        >
          <svg
            class="w-4 h-4 me-1.5 -ms-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
          Rechazar
        </button>
        <button
          type="button"
          class="inline-flex items-center text-white bg-success box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          @click="aceptar(solicitud)"
        >
          <svg
            class="w-4 h-4 me-1.5 -ms-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 11.917 9.724 16.5 19 7.5"
            />
          </svg>
          Aceptar
        </button>
      </li>
      <li v-if="!solicitudes.length" class="text-sm text-body">
        No tienes solicitudes pendientes.
      </li>
    </ul>

    <ModalAgregarAmigos ref="modal" :sugerencias="sugerencias" @agregar="agregar" />
  </div>
</template>
