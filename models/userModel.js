const { knex } = require("../dbConnection");

//ini data users berupa array object yang berisi nama, email, dan password

modelCreateUser = async (req, res) => {
    await knex.table("users").insert([
        {
            nama: req.body.nama,
            user_email: req.body.userEmail,
            user_password: req.body.userPassword,
        },
    ]);
    // data = {
    //     // untuk create user baru di aplikasi postman bagian body kemudian ke raw
    //     id: users[users.length - 1].id + 1, //mencari last index lalu increment +1
    //     nama: req.body.nama,
    //     userEmail: req.body.userEmail,
    //     userPassword: req.body.userPassword,
    // };
    // users.push(data);
};
modelGetUserId = async (req) => {
    let userID = req.params.Id; //untuk mendapatkan user id menggunakan req.params.Id
    const users = await knex.raw(`select * from users where Id = ${userID}`);

    return users.rows[0];
};
modellistAllUsers = async (req, res) => {
    const users = await knex.raw("select * from users");
    return users;
};
modelPutUserId = async (req, res) => {
    let userID = req.params.Id;
    const user = await knex.raw(`select * from users where Id = ${userID}`);
    // if (user !== null && user !== undefined && user !== "") {
    await knex.table("users").where({ id: req.params.Id }).update({
        nama: req.body.nama,
        user_email: req.body.userEmail,
        user_password: req.body.userPassword,
    });
    // }
};
modelDeleteUserId = async (req, res) => {
    let userID = req.params.Id;
    const user = await knex.raw(`select * from users where Id = ${userID}`);
    await knex.table("users").where({ id: req.params.Id }).delete();
};

module.exports = {
    modelCreateUser,
    modelGetUserId,
    modellistAllUsers,
    modelPutUserId,
    modelDeleteUserId,
};
