const { knex } = require("../dbConnection");

//ini data users berupa array object yang berisi nama, email, dan password
let users = [
    {
        id: 1, // Identifier => Key untuk mengidentifikasi masing-masing data => Sifatnya selalu unique
        nama: "El",
        userEmail: "el@mail.com",
        userPassword: "password",
    },
    {
        id: 2,
        nama: "Johan",
        userEmail: "johan@mail.com",
        userPassword: "abc123",
    },
    {
        id: 3,
        nama: "Debi",
        userEmail: "debi@mail.com",
        userPassword: "asdfgh",
    },
    {
        id: 4,
        nama: "Peter",
        userEmail: "peter@mail.com",
        userPassword: "zxcvb",
    },
    {
        id: 5,
        nama: "Luna",
        userEmail: "luna@mail.com",
        userPassword: "qwerty",
    },
];

modelCreateUser = async (req, res) => {
    try {
        await knex.table("users").insert([
            {
                nama: req.body.nama,
                user_email: req.body.userEmail,
                user_password: req.body.userPassword,
            },
        ]);
    } catch (error) {
        console.log(error);
    }
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
function modelPutUserId(req) {
    let userID = req.params.Id;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == userID) {
            if (
                req.body.nama !== null &&
                req.body.nama !== undefined &&
                req.body.nama !== ""
            ) {
                users[i].nama = req.body.nama;
            }

            if (
                req.body.userEmail !== undefined &&
                req.body.userEmail !== null &&
                req.body.userEmail !== ""
            ) {
                users[i].userEmail = req.body.userEmail;
            }

            if (
                req.body.userPassword != undefined &&
                req.body.userPassword != null &&
                req.body.userPassword != ""
            ) {
                users[i].userPassword = req.body.userPassword;
            }

            break;
        } //* untuk update apabila user ditemukan
    }
}
function modelDeleteUserId(req) {
    let userID = req.params.Id;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == userID) {
            users.splice(i, 1);
            break;
        }
    }
}

module.exports = {
    modelCreateUser,
    modelGetUserId,
    modellistAllUsers,
    modelPutUserId,
    modelDeleteUserId,
};
