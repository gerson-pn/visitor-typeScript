import ObjetoA from "./objetoA"
import ObjetoB from "./objetoB"

export default interface Visitante {
    visitarObjetoA(objeto: ObjetoA): void
    visitarObjetoB(objeto: ObjetoB): void
}