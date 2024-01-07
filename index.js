const jsonServer=require('json-server')// import json server

const docServer=jsonServer.create()// create a application using json server

const router=jsonServer.router('db.json') // create router (means restuaent oru router and restaurent/details verea router )

const middleware=jsonServer.defaults()// creating middle wares

const port=3001 // seting port {front end runs in 3000 so we need to change the port}

docServer.use(middleware)
docServer.use(router) // ee step koduknm use cheyan

docServer.listen(port,()=>{
    console.log('Doctor banend runs in ',+port);
})