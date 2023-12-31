const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');
const userRouter = require('./Routes/user');
const { connectMongoDb } = require('./Connection');
const { logreqres } = require('./Middlewares/index');
const app = express();
const port = 8000;

connectMongoDb('mongodb://127.0.0.1:27017/aka-new');

app.use(express.urlencoded({ extended: false }));
app.use(logreqres('./task.txt'));

app.use((req, res, next) => {
    return res.json({ msg: "Hello from middleware 2" });
})

app.use("/api/users", userRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});