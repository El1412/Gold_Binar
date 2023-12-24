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

function modelCreateUser(req) {
    data = {
        // untuk create user baru di aplikasi postman bagian body kemudian ke raw
        id: users[users.length - 1].id + 1, //mencari last index lalu increment +1
        nama: req.body.nama,
        userEmail: req.body.userEmail,
        userPassword: req.body.userPassword,
    };
    users.push(data);
}
function modelGetUserId(req) {
    let userID = req.params.Id; //untuk mendapatkan user id menggunakan req.params.Id
    let user; //memnbuat object baru
    for (let i = 0; i < users.length; i++) {
        // loop untuk mendapatkan Id user
        if (users[i].id == userID) {
            user = users[i];
            break;
        }
    }
    return user;
}
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
    modelPutUserId,
    modelDeleteUserId,
};
