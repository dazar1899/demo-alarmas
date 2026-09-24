export interface Persona {
  id: number
  nombre: string
  foto: string
}

const foto = (n: number) => `https://flowbite.com/docs/images/people/profile-picture-${n}.jpg`

export const amigosIniciales: Persona[] = [
  { id: 1, nombre: 'Neil Sims', foto: foto(1) },
  { id: 2, nombre: 'Thomas Lean', foto: foto(2) },
  { id: 3, nombre: 'Lana Byrd', foto: foto(3) },
]

export const solicitudesIniciales: Persona[] = [
  { id: 4, nombre: 'Pepito Pérez', foto: foto(4) },
  { id: 5, nombre: 'Roberta Casas', foto: foto(5) },
  { id: 6, nombre: 'Karen Nelson', foto: foto(2) },
]

/** Personas que se pueden invitar desde el modal "Agregar Amigos". */
export const sugerenciasIniciales: Persona[] = [
  { id: 7, nombre: 'Pepito Pérez', foto: foto(4) },
  { id: 8, nombre: 'Pepita López', foto: foto(5) },
]
