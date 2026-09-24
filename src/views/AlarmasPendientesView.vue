<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import AppSidebar from '@/components/AppSidebar.vue'

const router = useRouter()
const alarmas = ref([
  { id: 1, hora: '5:00 AM', texto: 'Mamá: Levantarse', dia: 'Hoy', estado: '' },
  { id: 2, hora: '7:00 AM', texto: 'Papá: Desayunar', dia: 'Hoy', estado: '' },
  { id: 3, hora: '10:00 AM', texto: 'Jefe: Reunión', dia: 'Mañana', estado: '' },
  { id: 4, hora: '5:00 PM', texto: 'Sebastián: Salida', dia: 'Mañana', estado: '' },
])
const seleccionadas = ref<number[]>([])
const todoSeleccionado = computed(() => alarmas.value.length > 0 && seleccionadas.value.length === alarmas.value.length)

function seleccionarTodo() {
  seleccionadas.value = todoSeleccionado.value ? [] : alarmas.value.map((alarma) => alarma.id)
}
function decidir(estado: string, id?: number) {
  const ids = id ? [id] : seleccionadas.value
  alarmas.value = alarmas.value.map((alarma) => ids.includes(alarma.id) ? { ...alarma, estado } : alarma)
  if (!id) seleccionadas.value = []
}
</script>

<template>
  <AppSidebar />
  <main class="min-h-full bg-neutral-secondary-soft p-6 sm:ml-64">
    <h1 class="text-2xl font-semibold text-heading mb-6">Alarmas pendientes</h1>
    <div class="max-w-3xl bg-neutral-primary-soft border border-default rounded-base shadow-xs p-5">
      <label class="flex items-center gap-3 text-heading border-b border-default pb-4 mb-4 cursor-pointer"><input type="checkbox" :checked="todoSeleccionado" class="w-5 h-5 border border-default-medium rounded-sm bg-neutral-secondary-medium text-brand focus:ring-2 focus:ring-brand-soft" @change="seleccionarTodo" />Seleccionar todo</label>
      <section v-for="dia in ['Hoy', 'Mañana']" :key="dia" class="mb-6">
        <h2 class="text-sm font-semibold text-body mb-3">{{ dia }}</h2>
        <div class="space-y-3">
          <div v-for="alarma in alarmas.filter((a) => a.dia === dia)" :key="alarma.id" class="flex flex-wrap items-center gap-4 border border-default rounded-base px-4 py-3">
            <input v-model="seleccionadas" type="checkbox" :value="alarma.id" :aria-label="`Seleccionar ${alarma.texto}`" class="w-5 h-5 border border-default-medium rounded-sm bg-neutral-secondary-medium text-brand focus:ring-2 focus:ring-brand-soft" />
            <div class="min-w-40 flex-1"><p class="font-semibold text-heading">{{ alarma.hora }}</p><p class="text-sm text-body">{{ alarma.texto }}</p><p v-if="alarma.estado" class="text-sm text-fg-brand">{{ alarma.estado }}</p></div>
            <div class="flex gap-2"><button type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" @click="decidir('Aceptada', alarma.id)">Aceptar</button><button type="button" class="text-body bg-neutral-secondary-medium box-border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" @click="decidir('Rechazada', alarma.id)">Rechazar</button></div>
          </div>
        </div>
      </section>
      <div class="flex justify-end gap-3 border-t border-default pt-4"><button type="button" class="text-body bg-neutral-secondary-medium box-border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" @click="router.push('/inicio')">Regresar</button><button type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" @click="decidir('Aceptada')">Aceptar seleccionadas</button></div>
    </div>
  </main>
</template>
