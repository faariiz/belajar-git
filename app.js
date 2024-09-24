const express = require('express'); 
const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

module.exports = app