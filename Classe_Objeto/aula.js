class Carro {
    marca;
    cor;
    gastoPorKm;

    constructor(marca, cor , gastoPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }
}

const Uno = new Carro('Fiat', "prata" , 1/15);

console.log(Uno);