import ObjetoA from "./objetoA";
import ObjetoB from "./objetoB";
import Visitante from "./visitante";


export default class Visitante2 implements Visitante{
    visitarObjetoA(objeto: ObjetoA): void {
        console.log(`Visitante 2`);
        console.log(`Processando objeto do tipo A`);
    }
    visitarObjetoB(objeto: ObjetoB): void {
        console.log(`Visitante 2`);
        console.log(`Processando objeto do tipo B`);
    }
    
}