"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sleep(timeout) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
}
exports.default = sleep;
;
