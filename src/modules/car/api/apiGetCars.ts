import { Car } from "../typing/car";
import { ApiCar } from "../typing/apiCar";
import axios from "axios";

/**
 * It acts as a `facade` or `adapter` transforming the received {@link ApiCar}
 * in a valid app type {@link Car}.
 */
export const apiGetCars = function (): Promise<Car[]> {
  return axios
    .get("https://jsonkeeper.com/b/S3US")
    .then((res) => res.data)
    .then((apiCars: ApiCar[]) =>
      apiCars.map(
        ({
          id,
          image,
          make,
          model,
          version,
          price,
          registrationYear,
          isKm0,
          status,
          homologationStandard: {
            wltp: { consumption },
          },
        }) => ({
          id,
          image,
          make,
          model,
          version,
          price,
          registrationYear,
          isKm0,
          status,
          consumption,
        })
      )
    );
};
