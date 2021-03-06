var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive } from "@angular/core";
import { NG_VALIDATORS } from "@angular/forms";
export var IdCardValidator = (function () {
    function IdCardValidator() {
    }
    IdCardValidator.prototype.validate = function (formControl) {
        var idCardRegexp15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
        var idCardRegexp18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        if (idCardRegexp18.test(formControl.value) || idCardRegexp15.test(formControl.value)) {
            return null;
        }
        return {
            idCardError: {
                valid: false
            }
        };
    };
    IdCardValidator = __decorate([
        Directive({
            selector: '[validateIdCard]',
            providers: [{
                    provide: NG_VALIDATORS, useExisting: IdCardValidator,
                    multi: true
                }]
        }), 
        __metadata('design:paramtypes', [])
    ], IdCardValidator);
    return IdCardValidator;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/shared/validator/id-card.validator.js.map