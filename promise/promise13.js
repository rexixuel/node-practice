var qio = require("q-io/http");

qio.read("http://localhost:7000").then((id) => {
     return qio.read("http://localhost:7001/"+id)
})
.then((user) => {
     console.log(JSON.parse(user.toString()));
});;