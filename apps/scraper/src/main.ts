import express from 'express';
import { agents } from '@angentic/agents';
import cors from 'cors';

const host = process.env.HOST ?? '0.0.0.0';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:4200';

const app = express();

// Enable CORS for the backoffice
app.use(cors({
  origin: corsOrigin,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/', (req, res) => {
  res.send({ message: agents() });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
  console.log(`[ CORS ] origin: ${corsOrigin}`);
});
