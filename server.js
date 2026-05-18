const express = require('express');
const mercadopago = require('mercadopago');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN
});

app.post('/create_preference', async (req, res) => {
  try {

    const preference = {
      items: [
        {
          title: req.body.title,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity)
        }
      ]
    };

    const response = await mercadopago.preferences.create(preference);

    res.json({
      init_point: response.body.init_point
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
