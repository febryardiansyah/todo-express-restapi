
# Todo-ExpressJs-With MongoDb
> Sample RestApi built with node.js+express.js and MongoDb

## Requirements
1. [nodejs](https://nodejs.org/)
2. [mongodb](https://www.mongodb.com/)
3. [postman](https://www.postman.com/)

## Routes

|Route|Method  |Desc|
|--|--|--|
| /api/ |GET  | get all item |
| /api/add |POST  | add item |
| /api/update/:id |PUT  | update item |
| /api/item/:id |GET  | get item by id |
| /api/delete/:id |DELETE  | delete item by id |  

## Usage

1. Clone

```bash

git clone https://github.com/febryardiansyah/todo-express-restapi.git

```

2. Install dependencies
```bash
    npm install
```

4. Start the development environment

> npm run dev

4. visit http://localhost:3000/api


## Screenshot
- Get all item
![get-all](https://media.discordapp.net/attachments/293767021030670356/793019182630567946/unknown.png?width=1576&height=1095)
- Add item
![add](https://media.discordapp.net/attachments/293767021030670356/793018944377454622/unknown.png?width=1568&height=1094)
- Update
![update](https://media.discordapp.net/attachments/293767021030670356/793005535808978964/unknown.png?width=1586&height=1093)
- Delete
![delete](https://media.discordapp.net/attachments/293767021030670356/793005181146890240/unknown.png?width=1518&height=1093)
- Get item by id
![enter image description here](https://media.discordapp.net/attachments/293767021030670356/793019566652653578/unknown.png?width=1574&height=1094)