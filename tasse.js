var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CalcoloTasse = /** @class */ (function () {
    function CalcoloTasse(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    return CalcoloTasse;
}());
var TasseDaPagare = /** @class */ (function (_super) {
    __extends(TasseDaPagare, _super);
    function TasseDaPagare(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        return _super.call(this, codredd, redditoannuolordo, tasseinps, tasseirpef) || this;
    }
    TasseDaPagare.prototype.getUtileTasse = function () {
        return (this.redditoannuolordo * this.codredd / 100);
    };
    TasseDaPagare.prototype.getTasseInps = function () {
        return (this.getUtileTasse() * this.tasseinps / 100);
    };
    TasseDaPagare.prototype.getTasseIrpef = function () {
        return (this.getUtileTasse() * this.tasseirpef / 100);
    };
    TasseDaPagare.prototype.getRedditoAnnuoNetto = function () {
        return (this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef()));
    };
    return TasseDaPagare;
}(CalcoloTasse));
var TasseArtigiano = new TasseDaPagare(67, 58000, 35, 15);
var TasseProfessionista = new TasseDaPagare(78, 91000, 25.72, 5);
var TasseCommerciante = new TasseDaPagare(40, 450000, 35, 15);
console.log("Il commerciante Tedesco Mauro con reddito annuo di \u20AC ".concat(TasseCommerciante.redditoannuolordo, " pagher\u00E0 per l'anno corrente \u20AC ").concat(TasseCommerciante.getTasseInps() + TasseCommerciante.getTasseIrpef(), ", tra cui:  tasse inps di \u20AC ").concat(TasseCommerciante.getTasseInps(), ", tasse irpef di \u20AC ").concat(TasseCommerciante.getTasseIrpef(), ", con un reddito netto di \u20AC ").concat(TasseCommerciante.getRedditoAnnuoNetto()));
console.log("L'Artigiano con reddito annuo di \u20AC ".concat(TasseArtigiano.redditoannuolordo, " pagher\u00E0 per l'anno corrente \u20AC ").concat(TasseArtigiano.getTasseInps() + TasseArtigiano.getTasseIrpef(), ", tra cui:  tasse inps di \u20AC ").concat(TasseArtigiano.getTasseInps(), ", tasse irpef di \u20AC ").concat(TasseArtigiano.getTasseIrpef(), ", con un reddito netto di \u20AC ").concat(TasseArtigiano.getRedditoAnnuoNetto()));
console.log("Il libero professionista con reddito annuo di \u20AC ".concat(TasseProfessionista.redditoannuolordo, " pagher\u00E0 per l'anno corrente \u20AC ").concat(TasseProfessionista.getTasseInps() + TasseProfessionista.getTasseIrpef(), ", tra cui:  tasse inps di \u20AC ").concat(TasseProfessionista.getTasseInps(), ", tasse irpef di \u20AC ").concat(TasseProfessionista.getTasseIrpef(), ", con un reddito netto di \u20AC ").concat(TasseProfessionista.getRedditoAnnuoNetto()));
