export interface Car {
  id: number;
  make: string;
  model: string;
  version: string;
  registrationYear: number;
  price: number;
  isKm0: boolean;
  image: string;
  consumption: {
    combined: string;
    unitOfMeasure: string;
  };
}
