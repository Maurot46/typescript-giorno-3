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
let TassePagate = new TasseDaPagare(1, 20000, 798, 178);
console.log(`L'operaio Tedesco Mauro con reddito annuo di € ${TassePagate.redditoannuolordo} pagherà per l'anno corrente € ${TassePagate.getUtileTasse()} di tasse, con un reddito netto di € ${TassePagate.getRedditoAnnuoNetto()}`);