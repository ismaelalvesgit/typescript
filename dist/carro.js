"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo_1 = require("./Veiculo");
var Carro = (function (_super) {
    __extends(Carro, _super);
    function Carro(modelo, numeroDePortas) {
        var _this = _super.call(this) || this;
        _this.modelo = modelo;
        _this.numeroDePortas = numeroDePortas;
        return _this;
    }
    return Carro;
}(Veiculo_1.default));
exports.default = Carro;
