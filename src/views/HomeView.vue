<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppSidebar from '@/components/AppSidebar.vue'
import BuscadorBar from '@/components/BuscadorBar.vue'
import CalendarioCard from '@/components/CalendarioCard.vue'
import { alarmasDeHoy, resumen } from '@/data/alarmas'

const busqueda = ref('')
const router = useRouter()
</script>

<template>
  <AppSidebar />

  <div class="min-h-full bg-neutral-secondary-soft p-6 sm:ml-64">
    <div class="flex items-center justify-between gap-4 mb-6"><h1 class="text-2xl font-semibold text-heading">Inicio</h1><button type="button" class="text-white bg-brand box-border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" @click="router.push('/alarmas/crear')">Crear alarma</button></div>

    <div class="mb-6">
      <BuscadorBar v-model="busqueda" />
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_23rem] gap-6 items-start">
      <div>
        <!-- Tarjetas de resumen -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div
            v-for="tarjeta in resumen"
            :key="tarjeta.id"
            class="flex flex-col items-center gap-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs p-5"
          >
            <h2 class="text-base font-semibold text-heading text-center">{{ tarjeta.titulo }}</h2>
            <button
              type="button"
              class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
              @click="router.push(tarjeta.id === 'pendientes' ? '/alarmas/pendientes' : '/calendario')"
            >
              Ver más
              <svg
                class="w-4 h-4 ms-1.5"
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
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Alarmas de hoy -->
        <h2 class="text-xl font-semibold text-heading mb-4">Alarmas de Hoy</h2>
        <ul class="space-y-4">
          <li
            v-for="alarma in alarmasDeHoy"
            :key="alarma.id"
            class="flex items-center gap-3 bg-neutral-primary-soft border border-default rounded-base shadow-xs px-4 py-3"
          >
            <div class="min-w-0 flex-1">
              <p class="text-base font-semibold text-heading truncate">{{ alarma.titulo }}</p>
              <p class="text-sm text-body">{{ alarma.hora }}</p>
            </div>

            <span
              class="inline-flex items-center gap-1.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm font-medium px-2.5 py-1 rounded-base"
            >
              <svg
                v-if="alarma.tipo === 'Personal'"
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16.5a5.5 5.5 0 0 0-5.5-5.5h-2A5.5 5.5 0 0 0 1 16.5M10 4a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                />
              </svg>
              <svg
                v-else
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              {{ alarma.tipo }}
            </span>

            <button
              type="button"
              class="shrink-0 text-heading bg-neutral-primary-soft box-border border border-default-medium hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium rounded-base p-2 focus:outline-none"
            >
              <span class="sr-only">Opciones de {{ alarma.titulo }}</span>
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 4 15"
              >
                <path
                  d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>

      <CalendarioCard />
    </div>
  </div>
</template>
