cd ..
echo +++++ PWD : `pwd` +++++
echo +++++ Running git pull +++++
git pull
echo +++++ Removing log files ! +++++
rm '/home/ubuntu/www/logs/gz-client-err.log'
rm '/home/ubuntu/www/logs/gz-client-out.log'
rm '/home/ubuntu/www/logs/gz-client-combined.log'
echo +++++ Running pm2 restart gz-client +++++
pm2 restart gz-client
