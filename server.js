const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handel = app.getRequestHandler()

app.prepare()
.then(() => {
      const server = express()

      server.get('/DynamicPage/:username',(req,res) => {
            app.render(req,res,`/DynamicPage/?username=${username}`,{username:req.params.username})
      })

      server.get('*',(req,res) => {
            return handel(req,res)
      })

      server.listen(3000,err => {
            if(err) throw err;
            console.log('ready on http://localhost:3000')
      })
})

.catch(ex => {
      console.error(ex.stack)
      process.exit(1)

})
