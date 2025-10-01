const cron = require('cron');
const https = require('https');

const backendUrl = 'https://real-estate-rentals-backend.onrender.com/';
const job = new cron.CronJob('*/14 * * * *', () => {
    // this will be executed every 14 minutes
  https.get(backendUrl, (res) => {
    console.log(`Backend pinged successfully with status code: ${res.statusCode}`);
    if (res.statusCode === 200) {
        console.log('Server restarted successfully');
    } else {
        console.log('Failed to restart the server with status code:', res.statusCode);
    }
  }).on('error', (e) => {
    console.error(`Error during restart: ${e.message}`);
  });
});

module.exports = {
    job: job
}