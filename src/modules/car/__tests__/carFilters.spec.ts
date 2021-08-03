import CarFilters from "@/modules/car/components/CarFilters.vue";
import { mount } from "@vue/test-utils";

describe("CarFilters component", () => {
  it("emits a `filter` event on search input with the filter as payload", async () => {
    const wrapper = mount(CarFilters);

    const filter = "test text";

    const searchInputWrapper = wrapper.find(".car-filters__input");
    await searchInputWrapper.setValue(filter);

    expect(wrapper.emitted().filter?.[0]).toStrictEqual([filter]);
  });
});
