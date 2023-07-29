const app = require('./app');

const port = process.env.PORT || 4242;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
