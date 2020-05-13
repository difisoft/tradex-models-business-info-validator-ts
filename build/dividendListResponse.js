"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dividendListResponseValidator = exports.dividendListResponseSchema = void 0;
const Ajv = require("ajv");
exports.dividendListResponseSchema = {
    "id": "http://tradex.techx.vn/business-info/dividendListResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "dividendListResponse schema",
    "type": "object",
    "properties": {
        "id": {
            "description": "id",
            "type": "string"
        },
        "code": {
            "description": "symbol code",
            "type": "string"
        },
        "eventType": {
            "description": "event type (DIVIDEND/PHK/RIGHT_ISSUE/BONUS_SHARE/PHCL...)",
            "type": "string"
        },
        "exDividendDate": {
            "description": "exDividend date",
            "type": "string"
        },
        "implementDate": {
            "description": "implement date",
            "type": "string"
        },
        "ratio": {
            "description": "ratio",
            "type": "number"
        },
        "price": {
            "description": "price",
            "type": "number"
        },
        "comment": {
            "description": "comment",
            "type": "string"
        }
    }
};
let dividendListResponseAjv = null;
function dividendListResponseValidator() {
    if (dividendListResponseAjv == null) {
        dividendListResponseAjv = new Ajv({ validateSchema: false }).compile(exports.dividendListResponseSchema);
    }
    return dividendListResponseAjv;
}
exports.dividendListResponseValidator = dividendListResponseValidator;
//# sourceMappingURL=dividendListResponse.js.map