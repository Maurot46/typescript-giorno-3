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
var TassePagate = new TasseDaPagare(1, 20000, 798, 178);
console.log("L'operaio Tedesco Mauro con reddito annuo di \u20AC ".concat(TassePagate.redditoannuolordo, " pagher\u00E0 per l'anno corrente \u20AC ").concat(TassePagate.getTasseInps() + TassePagate.getTasseIrpef(), ", tra cui:  tasse inps di \u20AC ").concat(TassePagate.getTasseInps(), ", tasse irpef di \u20AC ").concat(TassePagate.getTasseIrpef(), ", con un reddito netto di \u20AC ").concat(TassePagate.getRedditoAnnuoNetto()));
