cd ..
echo +++++ PWD : `pwd` +++++
echo +++++ Running git pull +++++
git pull
echo +++++ Removing log files ! +++++
rm '/home/ubuntu/www/logs/gz-client.log'
echo ++++++ Starting deploying `date` +++++++ >> '/home/ubuntu/www/logs/gz-client.log'
echo `rm -r /home/ubuntu/www/gz` >> '/home/ubuntu/www/logs/gz-client.log'
echo `cp -r ./build /home/ubuntu/www/gz` >> '/home/ubuntu/www/logs/gz-client.log'
echo ++++++ Ending deploying `date` +++++++ >> '/home/ubuntu/www/logs/gz-client.log'
