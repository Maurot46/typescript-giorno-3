"use strict";
class CalcoloTasse {
    constructor(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
}
class TasseDaPagare extends CalcoloTasse {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        super(codredd, redditoannuolordo, tasseinps, tasseirpef);
    }
    getUtileTasse() {
        return (this.redditoannuolordo * this.codredd / 100);
    }
    getTasseInps() {
        return (this.getUtileTasse() * this.tasseinps / 100);
    }
    getTasseIrpef() {
        return (this.getUtileTasse() * this.tasseirpef / 100);
    }
    getRedditoAnnuoNetto() {
        return (this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef()));
    }
}
let TassePagate = new TasseDaPagare(1, 20000, 798, 178);
console.log(`L'operaio Tedesco Mauro con reddito annuo di € ${TassePagate.redditoannuolordo} pagherà per l'anno corrente € ${TassePagate.getTasseInps() + TassePagate.getTasseIrpef()}, tra cui:  tasse inps di € ${TassePagate.getTasseInps()}, tasse irpef di € ${TassePagate.getTasseIrpef()}, con un reddito netto di € ${TassePagate.getRedditoAnnuoNetto()}`);
