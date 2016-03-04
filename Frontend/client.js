var soap = require('soap');

var url = 'http://localhost:8000/wsdl?wsdl';

var args = {"tns:firstName":"world"};

soap.createClient(url, function(err, client) {

  client.Hello_Service.Hello_Port.sayHello(args, function(err, result){
    if (err) throw err;
    console.log(result);
  });
});
