require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGODB_URI);

app.use(cors());
app.use(express.json());

app.use('/api/info', require('./inforoutes'));
app.use('/api/contact', require('./contact.routes'));
app.use('/api/bookevent', require('./bookevent.routes'));


app.get('/', (req, res) => res.send('Backend running ✅'));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
