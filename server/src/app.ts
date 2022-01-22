import express, { Request, Response, NextFunction, Application } from 'express';

const app: Application = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => {
  console.log(`Server started... on http://localhost:${PORT}`);
});
