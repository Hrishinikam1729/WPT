const express = require('express');
const app = express();
const users = require('./MOCK_DATA.json');
const Port = 8000;

// Routes
app.get('/users', (req, res) => {
            const html = `<ul>${users.map((user) => `<li>${user.first_name}</li>`).join('')}</ul>`;
    res.send(html);
});

// Rest Api
app.get('/api/users', (req, res) => {
    return res.json(users);
});

app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
}).patch((req,res)=>{return res.json({statusbar:"pending"});
})
.post((req,res)=>{})
.delete((req,res)=>{});



app.listen(Port, () => {
    console.log('App listening on port 8000..');
});