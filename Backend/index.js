const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();

app.use(bodyParser.json());

const port = 8000;

/*app.get('/testdb', (req, res) => {
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8700
    }).then((conn) => {
        conn.query('SELECT * FROM users').then((result) => {
            res.json(result[0]);
        }).catch((err) => {
            res.json({error: err.message});
        });
    });
})*/

let conn = null;
const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8700
    });
    console.log('Connected to MySQL database');
}

//path: = GET /users for get all users from database
app.get('/users', async (req, res) => {
    const result = await conn.query('SELECT * FROM users');
    res.json(result[0])
});

//path: = POST /users for add new user
app.post('/users', async (req, res) => {
    try {
        let user = req.body;
        const results = await conn.query('INSERT INTO users Set ?', user);
        res.json({
            Message: 'User added successfully',
            data: results[0]
        });
    } catch (error) {
        console.log('Error inserting user:', error);
        res.status(500).json({ Message: 'Error adding user' });
    }
});

//path: = GET /users/:id for get user by id
app.get('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const results = await conn.query('SELECT * FROM users WHERE id = ?', id);
        if (results[0].length === 0) {
            throw { statusCode: 404, message: 'User not found' };
        }
        res.json(results[0][0]);
    } catch (error) {
        console.log('Error fetching user:', error);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: error.message || 'Error fetching user'
        });
    }
});

//path: = PUT /users/:id for update user by id
app.put('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let updatedUser = req.body;
        const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id]);
        res.json({
            message: 'User updated successfully',
            data: results[0]
        });
    } catch (error) {
        console.log('Error updating user:', error);
        res.status(500).json({ message: 'Error updating user' });
    }
});

//path: = DELETE /users/:id for delete user by id
app.delete('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const results = await conn.query('DELETE FROM users WHERE id = ?', id);
        res.json({
            message: 'User deleted successfully',
            data: results[0]
        });
    } catch (error) {
        console.log('Error deleting user:', error);
        res.status(500).json({ message: 'Error deleting user' });
    }
});

app.listen(port, async () => {
    await initMySQL();
    console.log(`Server is running on http://localhost:${port}`);
});


/*ใช้ async await ง่ายกว่า
app.get('/testdb-new', async (req, res) => {
    try {
        const result = await conn.query('SELECT * FROM users');
        res.json(result[0]);
    } catch (err) {
        console.error('Error connecting to the database:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});*/

/*path: = /GET /users
app.get('/users', (req, res) => {
    res.json(users);
});

//path: = POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1;

    users.push(user);
    res.json({
        Message: 'User added successfully',
        user: user
    });
});

// path: = PUT /user/:id
app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    let updatedUser = req.body;

    //หา user ที่จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);

    //อัปเดตข้อมูล users
    if (updatedUser.firstname) {
        users[selectedIndex].firstname = updatedUser.firstname;
    }
    if (updatedUser.lastname) {
        users[selectedIndex].lastname = updatedUser.lastname;
    }

    res.json({
        Message: 'User updated successfully',
        data: {
            user: updatedUser,
            indexupdate: selectedIndex
        }
    });
    //ส่ง users ที่อัปเดตแล้วกลับไป
});

app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    //หา index จาก id ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id);

    //ลบ user ออกจาก users
    users.splice(selectedIndex, 1);

    res.json({
        Message: 'User deleted successfully',
        indexupdate: selectedIndex
    });
});*/






/**ทำการ import โมดูล http
const http = require('http');
const host = 'localhost';
const port = 8000;

//กำหนดค่า server
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World! this is my first server.');
}

//run server
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
let users = [];
let counter = 1;*/

/**
    GET /users => ดึงข้อมูลผู้ใช้ทั้งหมด
    POST /user => เพิ่มผู้ใช้ใหม่
    GET /user/:id => ดึงข้อมูลผู้ใช้ตาม id
    PUT /user/:id => แก้ไขข้อมูลผู้ใช้ตาม id ที่บันทึก
    DELETE /user/:id => ลบผู้ใช้ตาม id ที่บันทึก
*/