const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('NJZKV API ONLINE');
});

app.post('/create_preference', async (req, res) => {
  try {

    res.json({
      init_point: 'https://www.mercadopago.com.br'
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: 'Erro no pagamento'
    });

  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Servidor rodando');
});
