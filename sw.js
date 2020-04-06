self.addEventListener('push', () => {
    self.regitration.sendNotification('test message', {})
});

