const express = require('express')
const routerprofilKader=require('./routers/profilKader')
const app = express()
const port = 3000

//menerima request body
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(routerprofilKader)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})