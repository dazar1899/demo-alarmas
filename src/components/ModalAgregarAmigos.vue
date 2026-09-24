<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Modal } from 'flowbite'
import BuscadorBar from '@/components/BuscadorBar.vue'
import type { Persona } from '@/data/amigos'

const props = defineProps<{ sugerencias: Persona[] }>()
const emit = defineEmits<{ agregar: [personas: Persona[]] }>()

const elemento = ref<HTMLDivElement | null>(null)
const seleccionados = ref<number[]>([])
const busqueda = ref('')
let modal: Modal | null = null

const visibles = computed(() => {
  const termino = busqueda.value.trim().toLowerCase()
  if (!termino) return props.sugerencias
  return props.sugerencias.filter((p) => p.nombre.toLowerCase().includes(termino))
})

function abrir() {
  seleccionados.value = []
  busqueda.value = ''
  modal?.show()
}

function cerrar() {
  modal?.hide()
}

function confirmar() {
  emit(
    'agregar',
    props.sugerencias.filter((p) => seleccionados.value.includes(p.id)),
  )
  cerrar()
}

onMounted(() => {
  if (!elemento.value) return
  modal = new Modal(elemento.value, { backdrop: 'dynamic', closable: true })
})

onBeforeUnmount(() => modal?.hide())

defineExpose({ abrir })
</script>

<template>
  <div
    ref="elemento"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-lg max-h-full">
      <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
        <!-- Encabezado -->
        <div class="flex items-center justify-between border-b border-default pb-4 md:pb-5">
          <h3 class="text-lg font-medium text-heading">Agregar Amigos</h3>
          <button
            type="button"
            class="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
            @click="cerrar"
          >
            <svg
              class="w-5 h-5"
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
            <span class="sr-only">Cerrar</span>
          </button>
        </div>

        <!-- Cuerpo -->
        <div class="space-y-4 py-4 md:py-6">
          <BuscadorBar v-model="busqueda" />

          <ul class="space-y-3">
            <li
              v-for="persona in visibles"
              :key="persona.id"
              class="flex items-center gap-3 border border-default rounded-base px-4 py-3"
            >
              <input
                :id="`sugerencia-${persona.id}`"
                v-model="seleccionados"
                :value="persona.id"
                type="checkbox"
                class="w-5 h-5 border border-default-medium rounded-sm bg-neutral-secondary-medium text-brand focus:ring-2 focus:ring-brand-soft"
              />
              <img class="w-10 h-10 rounded-full object-cover" :src="persona.foto" alt="" />
              <label
                :for="`sugerencia-${persona.id}`"
                class="text-base font-semibold text-heading cursor-pointer"
              >
                {{ persona.nombre }}
              </label>
            </li>
            <li v-if="!visibles.length" class="text-sm text-body py-2">
              No hay personas que coincidan con la búsqueda.
            </li>
          </ul>
        </div>

        <!-- Pie -->
        <div class="flex items-center justify-end border-t border-default gap-3 pt-4 md:pt-5">
          <button
            type="button"
            class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            @click="cerrar"
          >
            Cancelar
          </button>
          <button
            type="button"
            class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            @click="confirmar"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
