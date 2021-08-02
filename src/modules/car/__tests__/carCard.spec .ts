import { Car } from "@/modules/car/typing/car";
import CarCard from "@/modules/car/components/CarCard.vue";
import { mount, Wrapper } from "@vue/test-utils";
import { getCarStub } from "./stubs/car.stub";

/**
 * It returns a new wrapper instance of the {@link CarCard} component.
 *
 * By default it renders the `getCarStub` but you can override its properties
 * partially with the object passed as argument.
 *
 * @param car Partial Car.
 *
 * @returns Vue test utils CarCard Wrapper.
 */
const getCarCardWrapper = function (overrideCar?: Partial<Car>): Wrapper<Vue> {
  return mount(CarCard, {
    propsData: {
      car: {
        ...getCarStub,
        ...overrideCar,
      },
    },
  });
};

describe("CarCard component", () => {
  it("renders car card with the car id as data", () => {
    const wrapper = getCarCardWrapper();
    expect(wrapper.attributes("data-id")).toBe(getCarStub.id.toString());
  });

  it("renders km0 tag if car is km0", () => {
    const wrapper = getCarCardWrapper({ isKm0: true });
    expect(wrapper.find(".car-card__km0").exists()).toBe(true);
  });

  it("doesn't km0 tag if car is not km0", () => {
    const wrapper = getCarCardWrapper({ isKm0: false });
    expect(wrapper.find(".car-card__km0").exists()).toBe(false);
  });

  it("renders car make and car model", () => {
    const wrapper = getCarCardWrapper();
    expect(wrapper.find(".car-card__markmodel").text()).toBe(
      `${getCarStub.make} ${getCarStub.model}`
    );
  });

  it("renders car version", () => {
    const wrapper = getCarCardWrapper();
    expect(wrapper.find(".car-card__version").text()).toBe(getCarStub.version);
  });

  it("renders car price", () => {
    const wrapper = getCarCardWrapper();
    // remarks: $n is mocked
    expect(wrapper.find(".car-card__price-amount").text()).toBe(
      getCarStub.price.toString()
    );
  });

  it("renders car registration year if exists", () => {
    const wrapper = getCarCardWrapper();
    expect(wrapper.find(".car-card__detail-year").text()).toBe(
      getCarStub.registrationYear.toString()
    );
  });

  it("renders a single '-' if registration year doesn't exist", () => {
    const wrapper = getCarCardWrapper({ registrationYear: undefined });
    expect(wrapper.find(".car-card__detail-year").text()).toBe("-");
  });

  it("renders car consumption", () => {
    const wrapper = getCarCardWrapper();
    expect(wrapper.find(".car-card__detail-consumption").text()).toContain(
      `${getCarStub.consumption.combined} ${getCarStub.consumption.unitOfMeasure}`
    );
  });

  it("doesn't render car card if no car is provided", () => {
    const wrapper = mount(CarCard, {
      propsData: {
        car: undefined,
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(".car-card").exists()).toBe(false);
  });
});
