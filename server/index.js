const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// In-memory sample data
const items = [
  { id: 1, name: 'Item One', description: 'The first example item.' },
  { id: 2, name: 'Item Two', description: 'Another example item in the list.' },
  { id: 3, name: 'Item Three', description: 'A third item to demonstrate listing.' }
];

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

