abstract class CalcoloTasse {
    codredd: number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;
    constructor(_codredd: number, _redditoannuolordo: number, _tasseinps: number, _tasseirpef: number) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef
    }
    abstract getUtileTasse():number;
    abstract getTasseInps():number;
    abstract getTasseIrpef():number;
    abstract getRedditoAnnuoNetto():number;
}
class TasseDaPagare extends CalcoloTasse {
    constructor(codredd: number, redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        super(codredd,redditoannuolordo,tasseinps,tasseirpef)
    }
    getUtileTasse():number {
        return (this.redditoannuolordo * this.codredd / 100)
    }
    getTasseInps():number {
        return (this.getUtileTasse() * this.tasseinps / 100)
    }
    getTasseIrpef():number {
        return (this.getUtileTasse() * this.tasseirpef / 100)
    }
    getRedditoAnnuoNetto():number {
        return (this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef()))
    }
}
let TasseArtigiano = new TasseDaPagare(67, 58000, 35, 15);
let TasseProfessionista = new TasseDaPagare(78, 91000, 25.72, 5);
let TasseCommerciante = new TasseDaPagare(40, 450000, 35, 15)

console.log(`Il commerciante Tedesco Mauro con reddito annuo di € ${TasseCommerciante.redditoannuolordo} pagherà per l'anno corrente € ${TasseCommerciante.getTasseInps() + TasseCommerciante.getTasseIrpef()}, tra cui:  tasse inps di € ${TasseCommerciante.getTasseInps()}, tasse irpef di € ${TasseCommerciante.getTasseIrpef()}, con un reddito netto di € ${TasseCommerciante.getRedditoAnnuoNetto()}`);

console.log(`L'Artigiano con reddito annuo di € ${TasseArtigiano.redditoannuolordo} pagherà per l'anno corrente € ${TasseArtigiano.getTasseInps() + TasseArtigiano.getTasseIrpef()}, tra cui:  tasse inps di € ${TasseArtigiano.getTasseInps()}, tasse irpef di € ${TasseArtigiano.getTasseIrpef()}, con un reddito netto di € ${TasseArtigiano.getRedditoAnnuoNetto()}`);

console.log(`Il libero professionista con reddito annuo di € ${TasseProfessionista.redditoannuolordo} pagherà per l'anno corrente € ${TasseProfessionista.getTasseInps() + TasseProfessionista.getTasseIrpef()}, tra cui:  tasse inps di € ${TasseProfessionista.getTasseInps()}, tasse irpef di € ${TasseProfessionista.getTasseIrpef()}, con un reddito netto di € ${TasseProfessionista.getRedditoAnnuoNetto()}`);