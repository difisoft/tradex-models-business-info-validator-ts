
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const lastDividendResponseSchema = {
  "id": "http://tradex.techx.vn/business-info/lastDividendResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "lastDividendResponse schema",
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
      "description": "last exDividend date",
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
let lastDividendResponseAjv = null;
export function lastDividendResponseValidator() {
  if (lastDividendResponseAjv == null) {
    lastDividendResponseAjv = new Ajv({validateSchema: false}).compile(lastDividendResponseSchema);
  }
  return lastDividendResponseAjv;
}
      