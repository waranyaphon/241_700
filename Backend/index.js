/*//ทำการ import module http
const http = require('http');
const host = 'localhost';
const port = 8000;

//กำหนดค่า server
const reqestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, Its my first server!');
}

//run server
const server = http.createServer(reqestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});*/

//path: = /test
/*app.get('/test', (req, res) => {
    let user = {
        name: 'John Doe',
        age: 30,
        email: "john.doe@example.com"
    }
  res.json(user); //ส่งข้อมูลในรูปแบบ json
}); */


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//app.use(bodyParser.text());
app.use(bodyParser.json());

const port = 8000;

let users = [];
let counter = 1;

/**
 GET /users -> ดึงข้อมูล users ทั้งหมด
 POST /user -> เพิ่ม user ใหม่
 GET /user/:id -> ดึงข้อมูล user ตาม id
 PUT /user/:id -> แก้ไขข้อมูล user ตาม id ที่บันทึก
 DELETE /user/:id -> ลบ user ตาม id ที่บันทึก
 */

//'path: = GET /users
app.get('/users', (req, res) => {
  res.json(users); 
});

//path: = POST /user การเพิ่มข้อมูล
app.post('/user', (req, res) => {
    //res.json({ message: 'Data received successfully!' });
    let user = req.body; //รับข้อมูลจาก client
    user.id = counter;
    counter += 1;
    users.push(user);
    res.json({ message: 'User added successfully!', 
    user: user 
    });
   //res.send(req.body); //ส่งข้อมูลที่ได้รับกลับไปยัง client
});

//path : = PUT /user/:id edit เปลี่ยน put->patch
app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    
    let selectedIndex = users.findIndex(user => user.id == id);

    //อัพเดทข้อมูล user
    if (updateUser.Firstname){
        users[selectedIndex].Firstname = updateUser.Firstname;
    }
    if (updateUser.Lastname){
        users[selectedIndex].Lastname = updateUser.Lastname;
    }

    //users[selectedIndex].firstName = updateUser.Firstname || users[selectedIndex].firstName;
    //users[selectedIndex].lastName = updateUser.Lastname || users[selectedIndex].lastName;

    res.json({
        message: 'User updated successfully!',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });
    //users[selectedIndex] = req.body;
    //ส่ง users ที่อัพเดทแล้วกลับไป
    });
    app.delete('/users/:id', (req, res) => {
        let id = req.params.id;
        //หา user จาก id ที่ต้องการลบ
        let selectedIndex = users.findIndex(user => user.id == id);
        users.splice(selectedIndex, 1);

        //ลบ user ออกจาก users
        //delete users[selectedIndex];
        res.json({
            message: 'User deleted successfully!',
            indexDelete: selectedIndex
        });


});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

/**let selectedIndex = users.findIndex(user => {
        if(user.id == id) {
            return true;
        }else{
            return false;
        }
    });
    res.send(selectedIndex);*/
    // ลดรูปจากข้างบน
    //หา user จาก id ที่ส่งมา

