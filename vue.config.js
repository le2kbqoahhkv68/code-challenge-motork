module.exports = {
  // devServer: {
  //   https: true
  // },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/vars/index.scss";',
      },
    },
  },
};
