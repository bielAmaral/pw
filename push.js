var push = require('web-push');

let vapidKeys = { 
   publicKey: 'BPLRnzI55GXuxQy2y8BOvK2k2-UvFY-rD9OejUNj0350yc2jxRzeQ7oCc_KlEKVNmpvxYWwpJ8KkxEbhROc7jEQ',
   privateKey: 'KKNWMhLHB2cF83lLpgYxWrpj4YefEAb6EW-b1sUFOFQ' }

push.setVapidDetails('mailto:gabritorga@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cYmVQ26k740:APA91bFrpfI_3dJPX9q6ARK5vZPi6ZhLKpdGad65tCSpIyZB15e8IBTU9eiogYgsIMsJpcgnrON-qaHk54eh2nPAJ-RFkaRylktH-dFk5xp11vPdyHlrWSwPecL19XcmfAwPcdfFx-J6","expirationTime":null,"keys":{"p256dh":"BEYfymcPDJd8_adxBeXZFQ8TNNJkAfFo2JTigP2f8Rt9zj7KDwwUFjZtFriduyECFplafsCM62Ctrej_LUubFcw","auth":"V49frsrIdStEK69Lcga_ww"}};

push.sendNotification(sub, 'teste message')