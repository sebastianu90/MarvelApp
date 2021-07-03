// JSON
let values = {
  1: {
    carrier: "CCH",
    service: "DEX",
  },
  17: {
    carrier: "CHP",
    service: "express",
  },
};
// JSON
let json = {
  data: {
    BUIN: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17,
    },
    LAJA: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1,
    },
    LEBU: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1,
    },
    LOTA: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17,
    },
  },
};

/* --------- RESPUESTA ------------- */

let result = new Object();
Object.keys(json.data).forEach((key) => {
  let regiones = new Object();

  const data = json.data[key];
  Object.entries(data).forEach((entry) => {
    const [key2, value] = entry;
    if (entry[0] === "limit") {
      regiones[key2] = value;
      result[key] = regiones;
    }
    if (entry[0] === "over_carrier_service_id") {
      if (value === 1) {
        regiones["over"] = values[1];
        result[key] = regiones;
      } else regiones["over"] = values[17];
      result[key] = regiones;
    } else {
      if (value === 1) {
        regiones["under"] = values[1];
        result[key] = regiones;
      } else regiones["under"] = values[17];
      result[key] = regiones;
    }
  });
});

console.log(result);
