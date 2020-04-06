var push = require('web-push');

let vapidKeys = {
    publicKey: 'BPLRnzI55GXuxQy2y8BOvK2k2-UvFY-rD9OejUNj0350yc2jxRzeQ7oCc_KlEKVNmpvxYWwpJ8KkxEbhROc7jEQ',
    privateKey: 'KKNWMhLHB2cF83lLpgYxWrpj4YefEAb6EW-b1sUFOFQ'
}

push.setVapidDetails('mailto:gabritorga@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/fOCwxawmNJc:APA91bEDZmu67_gIymADXLxc7fT99BtmTYHQspPCoks8_QuCRD07zfVlGhhz2cRx_SNggErNHKMTFGiyfJkPY_fha4l-JrfVk2klgjjFEBLjWO4rXXUsqj0EvYZSlqjXuYbNZJSbOrgM", "expirationTime": null, "keys": { "p256dh": "BD4HAkqzaWnI8ZfPMwP0lymu9OvMK8Z4HaEAT3cuDq9D32OM2jpBekhrJvyfG3nZMAtzH73w_CdqWUsEecUATQQ", "auth": "kldp8sIC8RtjBhO5XMmpfQ" } };
push.sendNotification(sub, 'teste message')