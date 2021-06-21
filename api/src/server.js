import app from './app';

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server up at http://localhost:${PORT}`);
  });
}
export default app;