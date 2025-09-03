const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;
const VERSION = process.env.APP_VERSION || '1.5.0';

app.get('/api/hello', (req, res) => {
  res.json({ message: `Backend de Eliabe! Versão ${VERSION}` });
});

app.listen(PORT, () => console.log(`API ouvindo na porta ${PORT} — versão ${VERSION}`));
