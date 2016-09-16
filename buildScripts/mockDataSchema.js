export const schema = {
  "type": "object",
  "properties": {
    "calculations": {
      "type": "array",
      "minItems": 10,
      "maxItems": 30,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "newMpg": {
            "type": "number",
            "minimum": 12,
            "maximum": 55
          },
          "tradeMpg": {
            "type": "number",
            "minimum": 12,
            "maximum": 55
          },
          "pricePerGallon": {
            "type": "string",
            "chance": {
              "dollar": {
                "max": 5
              }
            }
          },
          "milesDrivenPerMonth": {
            "type": "number",
            "minimum": 100,
            "maximum": 1500
          }
        },
        required: ['id', 'newMpg', 'tradeMpg', 'pricePerGallon', 'milesDrivenPerMonth']
      }
    }
  },
  required: ['calculations']
};
