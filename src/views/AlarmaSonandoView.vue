<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppSidebar from '@/components/AppSidebar.vue'

const router = useRouter()
const panelAbierto = ref(false)
const minutos = ref(5)
const aviso = ref('')
function confirmarPosponer() { aviso.value = `Alarma pospuesta ${minutos.value} minutos`; panelAbierto.value = false }
</script>

<template>
  <AppSidebar />
  <main class="min-h-full bg-neutral-secondary-soft p-6 sm:ml-64">
    <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none mb-6" @click="router.push('/inicio')">← Regresar</button>
    <div class="max-w-xl bg-neutral-primary-soft border border-default rounded-base shadow-xs p-6">
      <h1 class="text-2xl font-semibold text-heading mb-10">Alarma sonando</h1>
      <p class="text-5xl font-medium text-heading text-center mb-10">05:00 AM</p>
      <dl class="divide-y divide-default border border-default rounded-base mb-8">
        <div class="flex justify-between gap-4 px-4 py-3"><dt class="text-heading">Descripción</dt><dd class="text-body">Levantarse para salir</dd></div>
        <div class="flex justify-between gap-4 px-4 py-3"><dt class="text-heading">Grupo</dt><dd class="text-body">Familia</dd></div>
        <div class="flex justify-between gap-4 px-4 py-3"><dt class="text-heading">Creada por</dt><dd class="text-body">Pepito Pérez</dd></div>
      </dl>
      <p v-if="aviso" role="status" class="text-fg-brand mb-4">{{ aviso }}</p>
      <div class="flex gap-3"><button type="button" class="flex-1 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" @click="panelAbierto = true">Posponer</button><button type="button" class="flex-1 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" @click="router.push('/inicio')">Detener</button></div>
    </div>
    <div v-if="panelAbierto" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-label="Configurar posponer">
      <div class="w-full max-w-sm bg-neutral-primary-soft border border-default rounded-base shadow-sm p-6">
        <h2 class="text-lg font-semibold text-heading mb-5">Posponer</h2>
        <div class="flex items-center justify-between border border-default rounded-base p-3 mb-5"><span class="text-heading">{{ minutos }} min</span><div class="flex gap-2"><button type="button" aria-label="Restar cinco minutos" class="text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium rounded-base px-3 py-1" @click="minutos = Math.max(5, minutos - 5)">−</button><button type="button" aria-label="Sumar cinco minutos" class="text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium rounded-base px-3 py-1" @click="minutos += 5">+</button></div></div>
        <div class="flex justify-end gap-3"><button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" @click="panelAbierto = false">Cancelar</button><button type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" @click="confirmarPosponer">Aceptar</button></div>
      </div>
    </div>
  </main>
</template>
