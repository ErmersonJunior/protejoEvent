const server = require('./config/server');
const { PORT } = require('./config/constants').SERVER;

server.listen(PORT, () => console.log(`SERVER ON PORT ${PORT}`));