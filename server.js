
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/user', (req, res) => {
    res.json({ email: 'demo@example.com', balance: 100, level: 3 });
});

app.listen(3000, () => {
    console.log('Casino server running on http://localhost:3000');
});
