import { config } from "@vue/test-utils";

/**
 * Mocks vue-i18n $t function. It returns the same key.
 *
 * @param {string} key
 */
config.mocks["$t"] = (key) => {
  return key;
};

/**
 * Mocks vue-i18n $n function. It returns the same key.
 *
 * @param {string} key
 */
config.mocks["$n"] = (key) => {
  return key;
};
