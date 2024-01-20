/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    // await knex('table_name').del()
    await knex("users").insert([
        {
            id: 1,
            nama: "Ek",
            user_email: "el@mail.com",
            user_password: "password",
        },
        {
            id: 2,
            nama: "Johan",
            user_email: "johan@mail.com",
            user_password: "abc123",
        },
        {
            id: 3,
            nama: "Debi",
            user_email: "debi@mail.com",
            user_password: "asdfgh",
        },
        {
            id: 4,
            nama: "Peter",
            user_email: "peter@mail.com",
            user_password: "zxcvb",
        },
        {
            id: 5,
            nama: "Luna",
            user_email: "luna@mail.com",
            user_password: "qwerty",
        },
    ]);
};
