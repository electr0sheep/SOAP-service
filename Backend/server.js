var http = require('http');
var soap = require('soap');

var helloService = {
  Hello_Service: {
    Hello_Port: {
      sayHello: function(args) {
        var name = "";
        if (args.firstName.$value != null){
          name = args.firstName.$value;
        } else {
          name = args.firstName;
        }
        return {
          greeting: "Hello, " + name + "!"
        };
      }
    }
  }
}

var xml = require('fs').readFileSync('HelloService.wsdl', 'utf8'),
      server = http.createServer(function(request,response) {
          response.end("404: Not Found: "+request.url)
      });
server.listen(8000);
soap.listen(server, '/wsdl', helloService, xml);
