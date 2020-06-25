const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    const facePage = {
        title: "RentBooks",
        description: 'Nós somos apaixonados por livros e temos o compromisso de facilitar o acesso de pessoas aos seus livros preferidos. Por isso, a <a class="links" href="index.html">RentBooks&copy;</a> criou a maior plataforma de empréstimos de livro do Brasil, onde você pode emprestar livros de qualquer lugar do país, sem precisar sair de casa.'
    }

    return res.render("index", {facePage: facePage}) 
})

server.get("/content", function(req, res){
    return res.render("content", {items: videos})
})

server.listen(5000, function(){
    console.log("server is running")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});