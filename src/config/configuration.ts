export default () => ({
    port: parseInt(process.env.PORT) || 3000,
    mongodb: {
      url: `mongodb+srv://${process.env.DATABASE_USERNAME}:${encodeURIComponent(process.env.DATABASE_PASSWORD)}@cluster0.op0nt.mongodb.net/?retryWrites=true&w=majority`
    }
  });
  