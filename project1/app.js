/**
 *                 ApplicationServer
 *             (Do not change this code)
 * Require Modules to setup the REST Api
 * - `express` Express.js is a Web Framework
 * - `morgan` Isn't required but help with debugging and logging
 * - `body-parser` This module allows to parse the body of the post request into a JSON
 */
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
/**
 * Require the Blockchain class. This allow us to have only one instance of the class.
 */
const BlockChain = require('./src/blockchain.js');

class ApplicationServer {

	constructor() {
		//Express application object
		this.app = express();
		//Blockchain class object
		this.blockchain = new BlockChain.Blockchain();
		//Method that initialized the express framework.
		this.initExpress();
		//Method that initialized middleware modules
		this.initExpressMiddleWare();
		//Method that initialized the controllers where you defined the endpoints
		this.initControllers();
		//Method that run the express application.
		this.start();
	}

	initExpress() {
		this.app.set("port", 8000);
	}

	initExpressMiddleWare() {
		this.app.use(morgan("dev"));
		this.app.use(bodyParser.urlencoded({extended:true}));
		this.app.use(bodyParser.json());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
	}

	initControllers() {
        require("./BlockchainController.js")(this.app, this.blockchain);
	}

	start() {
		let self = this;
		// self.app.get('/block/:height', (req, rsp) => {
		// 	let block = self.blockchain.getBlockByHeight(req.params.height)
		// 	.then(b => rsp.send(b))
		// 	.catch(err => console.log(err))
		//   })
		// self.app.post('/requestValidation', (req, rsp) => {
		// 	self.blockchain.requestMessageOwnershipVerification(req.body.address)
		// 	.then(res => rsp.send(res))
		// })
		//   self.app.post('/submitstar', (req, rsp) => {
		// 	self.blockchain.submitStar(
		// 		req.body.address,
		// 		req.body.message,
		// 		req.body.signature,
		// 		req.body.star)
		// 	.then(res => rsp.send(res))
		// 	.catch(err => console.log(err))
		//   })
		self.app.listen(this.app.get("port"), () => {
			console.log(`Server Listening for port: ${self.app.get("port")}`);
		});
	}

}

new ApplicationServer();