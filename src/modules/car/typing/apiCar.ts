export interface ApiCar {
  id: number;
  make: string;
  model: string;
  type: string;
  version: string;
  seats: number;
  registrationYear: number;
  classCode: string;
  price: number;
  km: number;
  co2: number;
  isKm0: boolean;
  status: string;
  image: string;
  homologationStandard: {
    wltp: {
      consumption: {
        combined: number;
        unitOfMeasure: string;
      };
    };
  };
}
