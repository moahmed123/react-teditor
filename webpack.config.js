module.exports = {    
    devServer: {
        historyApiFallback: {
            disableDotRule: true,
            index: paths.publicUrlOrPath,
          }
    }
  };