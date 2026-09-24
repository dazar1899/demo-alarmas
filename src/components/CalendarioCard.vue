<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Datepicker } from 'flowbite'
import { diasConAlarma } from '@/data/alarmas'

const props = withDefaults(defineProps<{ monthOffset?: number; compact?: boolean }>(), {
  monthOffset: 0,
  compact: false,
})
const contenedor = ref<HTMLDivElement | null>(null)

/** El datepicker arranca con el día de hoy seleccionado (formato mm/dd/yyyy). */
const hoy = new Date()
const mesMostrado = new Date(hoy.getFullYear(), hoy.getMonth() + props.monthOffset, 1)
const fechaInicial = [mesMostrado.getMonth() + 1, mesMostrado.getDate(), mesMostrado.getFullYear()]
  .map((n, i) => (i < 2 ? String(n).padStart(2, '0') : String(n)))
  .join('/')
let observador: MutationObserver | null = null

/** Marca con un punto los días que tienen alarmas programadas. */
function marcarDiasConAlarma() {
  const el = contenedor.value
  if (!el) return
  el.querySelectorAll<HTMLElement>('.datepicker-cell.day').forEach((celda) => {
    const timestamp = Number(celda.dataset.date)
    const dia = Number.isNaN(timestamp) ? NaN : new Date(timestamp).getDate()
    const esDelMes = !celda.classList.contains('prev') && !celda.classList.contains('next')
    const esMesActual = props.monthOffset === 0
    celda.classList.toggle('has-alarm', esMesActual && esDelMes && diasConAlarma.includes(dia))
  })
}

onMounted(() => {
  if (!contenedor.value) return
  new Datepicker(contenedor.value, { format: 'mm/dd/yyyy', autohide: false })
  marcarDiasConAlarma()
  // El datepicker vuelve a pintar las celdas al cambiar de mes: reaplicamos los puntos.
  observador = new MutationObserver(marcarDiasConAlarma)
  observador.observe(contenedor.value, { childList: true, subtree: true })
})

onBeforeUnmount(() => observador?.disconnect())
</script>

<template>
  <div class="bg-neutral-primary-soft border border-default rounded-base shadow-xs p-3">
    <div ref="contenedor" inline-datepicker :data-date="fechaInicial" class="calendario"></div>

    <div v-if="!compact" class="flex items-center gap-3 px-2 pb-1">
      <button
        type="button"
        class="flex-1 text-heading bg-neutral-primary-soft box-border border border-default-medium hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
      >
        Ver más
      </button>
      <button
        type="button"
        class="flex-1 inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
      >
        Siguiente
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
</template>

<style scoped>
.calendario :deep(.datepicker) {
  width: 100%;
}

.calendario :deep(.datepicker-picker) {
  box-shadow: none;
  border: 0;
  width: 100%;
}

.calendario :deep(.datepicker-cell.day) {
  /* Deja aire sobre el número para el punto de "día con alarma". */
  padding-top: 0.375rem;
}

.calendario :deep(.datepicker-cell.has-alarm) {
  position: relative;
}

.calendario :deep(.datepicker-cell.has-alarm)::after {
  content: '';
  position: absolute;
  top: 0.125rem;
  left: 50%;
  transform: translateX(-50%);
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 9999px;
  background-color: var(--color-brand);
}
</style>
