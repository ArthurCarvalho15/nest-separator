"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeparatorService = void 0;
const common_1 = require("@nestjs/common");
let SeparatorService = exports.SeparatorService = class SeparatorService {
    stringSeparator(data) {
        const separetedList = {
            numbers: [],
            letters: [],
        };
        for (let i = 0; i < data.length; i++) {
            if (isNaN(parseInt(data[i]))) {
                separetedList.letters.push(data[i]);
            }
            else {
                separetedList.numbers.push(parseInt(data[i]));
            }
        }
        return separetedList;
    }
};
exports.SeparatorService = SeparatorService = __decorate([
    (0, common_1.Injectable)()
], SeparatorService);
//# sourceMappingURL=separator.service.js.map