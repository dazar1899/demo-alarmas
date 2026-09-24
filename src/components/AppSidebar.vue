<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { initDrawers } from 'flowbite'

const route = useRoute()

interface ItemMenu {
  nombre: string
  icono: string
  /** Sin `to` la sección todavía no existe: es un enlace inerte del mockup. */
  to?: string
}

const items: ItemMenu[] = [
  {
    nombre: 'Inicio',
    to: '/inicio',
    icono:
      'm4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5',
  },
  {
    nombre: 'Grupos',
    to: '/grupos',
    icono:
      'M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z',
  },
  {
    nombre: 'Calendario',
    to: '/calendario',
    icono:
      'M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z',
  },
  {
    nombre: 'Amigos',
    to: '/amigos',
    icono:
      'M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  },
]

onMounted(() => initDrawers())
</script>

<template>
  <!-- Botón de menú (sólo móvil) -->
  <button
    data-drawer-target="logo-sidebar"
    data-drawer-toggle="logo-sidebar"
    aria-controls="logo-sidebar"
    type="button"
    class="fixed top-0 start-0 z-50 text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base ms-3 mt-3 text-sm p-2 focus:outline-none inline-flex sm:hidden"
  >
    <span class="sr-only">Abrir menú</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
        d="M5 7h14M5 12h14M5 17h10"
      />
    </svg>
  </button>

  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
      <RouterLink
        to="/inicio"
        class="flex items-center justify-center gap-2.5 pb-4 mb-4 border-b border-default"
      >
        <span class="flex items-center justify-center w-7 h-7 rounded-full bg-brand text-white">
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" />
          </svg>
        </span>
        <span class="self-center text-lg text-heading font-semibold whitespace-nowrap">Alarmas</span>
      </RouterLink>

      <ul class="space-y-1 font-medium">
        <li v-for="item in items" :key="item.nombre">
          <component
            :is="item.to ? RouterLink : 'a'"
            v-bind="item.to ? { to: item.to } : { href: '#' }"
            class="flex items-center px-3 py-2 rounded-base group"
            :class="
              item.to && route.path === item.to
                ? 'bg-neutral-tertiary text-fg-brand'
                : 'text-body hover:bg-neutral-tertiary hover:text-fg-brand'
            "
          >
            <svg
              class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand"
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
                :d="item.icono"
              />
            </svg>
            <span class="ms-3 text-base">{{ item.nombre }}</span>
          </component>
        </li>
      </ul>
    </div>
  </aside>
</template>
