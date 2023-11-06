const app = require("./app");
const { PORT } = process.env;

const startApp = () => {
  app.listen(PORT, () => {
    console.log(`The Auth Server running on port ${PORT}`);
  });
};

startApp();
