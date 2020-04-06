var push = require('web-push');

let vapidKeys = { 
   publicKey: 'BPLRnzI55GXuxQy2y8BOvK2k2-UvFY-rD9OejUNj0350yc2jxRzeQ7oCc_KlEKVNmpvxYWwpJ8KkxEbhROc7jEQ',
   privateKey: 'KKNWMhLHB2cF83lLpgYxWrpj4YefEAb6EW-b1sUFOFQ' }

push.setVapidDetails('mailto:gabritorga@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'teste message')