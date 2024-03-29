const { knex } = require("../dbConnection");

const {
    modelCreateUser,
    modelGetUserId,
    modellistAllUsers,
    modelPutUserId,
    modelDeleteUserId,
} = require("../models/userModel");

class UserController {
    static async createUser(req, res) {
        console.log(req.body);
        if (
            req.body.nama === null ||
            req.body.nama === undefined ||
            req.body.nama === ""
        ) {
            res.status(400).json({
                message: "name cannot be empty",
            });
            return;
        }

        if (
            req.body.userEmail === null ||
            req.body.userEmail === undefined ||
            req.body.userEmail === ""
        ) {
            res.status(400).json({
                message: "email cannot be empty",
            });
            return;
        }

        if (
            req.body.userPassword === null ||
            req.body.userPassword === undefined ||
            req.body.userPassword === ""
        ) {
            res.status(400).json({
                message: "password cannot be empty",
            });
            return;
        }

        try {
            await modelCreateUser(req);

            res.status(201).json({
                message: "Success",
            });
        } catch (error) {
            res.status(400).json({
                message: error,
            });
        }
    }
    static async getUserId(req, res) {
        let user = await modelGetUserId(req);
        let userID = req.params.Id;

        if (user != undefined) {
            //apabila user id ketemu
            res.status(200).json({
                data: user, // akan ditampilkan disini
            });
            return;
        } else {
            //bila user Id tidak ketemu
            res.status(404).json({
                message: `User with id ${userID} not found`, // akan ditampilkan ini
            });
            return;
        }
    }
    static async listAllUsers(req, res) {
        const users = await modellistAllUsers(req);
        res.json({
            users: users.rows,
        });
    }

    static async putUserId(req, res) {
        let user = await modelGetUserId(req);
        let userID = req.params.Id;
        if (user != undefined) {
            await modelPutUserId(req);
            res.status(200).json({
                message: "Success",
            }); //* setelah update
        } else {
            res.status(404).json({
                message: `User with id ${userID} not found`,
            }); //* bila user tidak ketemu
        }
        return;
    }
    static async deleteUserId(req, res) {
        let user = await modelGetUserId(req);
        let userID = req.params.Id;

        if (user === undefined) {
            //bila user Id tidak ketemu
            res.status(404).json({
                message: `User with id ${userID} not found`, // akan ditampilkan ini
            });

            return; // early return
        }

        modelDeleteUserId(req);
        res.status(202).json({
            message: "User Deleted Successfully",
        });
        return;
    }
}

module.exports = { UserController };
