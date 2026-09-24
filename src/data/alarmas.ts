export type TipoAlarma = 'Personal' | 'Grupal'

export interface Alarma {
  id: number
  titulo: string
  hora: string
  tipo: TipoAlarma
}

export const alarmasDeHoy: Alarma[] = [
  { id: 1, titulo: 'Ir al trabajo', hora: '7:00 AM', tipo: 'Personal' },
  { id: 2, titulo: 'Reunión', hora: '9:00 AM', tipo: 'Grupal' },
  { id: 3, titulo: 'Cena Familiar', hora: '7:00 pm', tipo: 'Personal' },
]

/** Días del mes actual que tienen alarmas programadas (marcados con un punto en el calendario). */
export const diasConAlarma = [16, 17, 20, 24]

export const resumen = [
  { id: 'pendientes', titulo: 'Alarmas Pendientes' },
  { id: 'confirmadas', titulo: 'Alarmas Confirmadas' },
  { id: 'reuniones', titulo: 'Próximas Reuniones' },
]
