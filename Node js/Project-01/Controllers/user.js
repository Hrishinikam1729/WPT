const User = require('../Model/user');

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "user not found" })
    return res.json(user);
}

async function handleUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastname: "Changed" });
    return res.json({ statusbar: "Success" });
}
async function handleDeleteuserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ msg: "Success" });
}

async function handleCreateUserById(req, res) {

    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.sendStatus(400).send({ msg: 'All fields are required' });
    } else {
        const result = await User.create({
            firstname: body.first_name,
            lastname: body.last_name,
            email: body.email,
            gender: body.gender,
            jobTitle: body.job_title,
        });
        console.log('result', result);
        return res.status(201).json({ msg: "success" });

    }
}

module.exports = { handleGetAllUsers, handleGetUserById, handleUserById, handleDeleteuserById, handleCreateUserById, };