var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ErrorAlterComponent } from "./component/error-altert.component";
import { PhoneNumberValidator } from "./validator/phone-number.validator";
import { NumberValidator } from "./validator/number.validator";
import { LengthValidator } from "./validator/length.validator";
import { IdCardValidator } from "./validator/id-card.validator";
import { CarLicenseValidator } from "./validator/car-license.validator";
import { OssImgUploadComponent } from "./component/img-upload/img-upload.component";
import { SimpleValidator } from "./validator/simple.validator";
export var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule
            ],
            declarations: [ErrorAlterComponent, OssImgUploadComponent,
                PhoneNumberValidator, NumberValidator, LengthValidator, SimpleValidator,
                IdCardValidator, CarLicenseValidator],
            exports: [ErrorAlterComponent, OssImgUploadComponent, SimpleValidator,
                PhoneNumberValidator, NumberValidator, LengthValidator,
                IdCardValidator, CarLicenseValidator, CommonModule, FormsModule,]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/shared/shared.module.js.map