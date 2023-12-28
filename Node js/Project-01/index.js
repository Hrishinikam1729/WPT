const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');

const app = express();
const port = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log("Hello from middleware 1");
    next();
});

app.use((req, res, next) => {
    return res.json({ msg: "Hello from middleware 2" });

})

// Routes
app.get('/users', (req, res) => {
            const html = `<ul>${users.map((user) => `<li>${user.first_name}</li>`).join('')}</ul>`;
    res.send(html);
});

// Rest API
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        res.json(user);
    })
    .patch((req, res) => {
        res.json({ status: "success", message: "User update is pending" });
    })
    .post((req, res) => {
        const body = req.body;
        users.push({ ...body, id: users.length + 1 });
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
            if (err) {
                return res.status(500).json({ status: "error", error: err.message });
            }
            res.json({ status: "success", message: "User created successfully" });
        });
    })
    .delete((req, res) => {
        const id = Number(req.params.id);
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex !== -1) {
            users.splice(userIndex, 1);
            fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
                if (err) {
                    return res.status(500).json({ status: "error", error: err.message });
                }
                res.json({ status: "success", message: "User deleted successfully" });
            });
        } else {
            res.status(404).json({ status: "error", message: "User not found" });
        }
    });

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});