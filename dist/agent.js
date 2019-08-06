"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (plu) => {
    plu.on('props', async (configs) => plu.logger.debug('<ConfigProps>', configs));
};
