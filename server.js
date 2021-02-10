const app = require('./src/app');

app.listen(process.env.PORT || 8003);

console.log(`Rodando servidor na porta ${process.env.PORT}`)

