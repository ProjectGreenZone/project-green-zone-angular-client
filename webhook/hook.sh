cd ..
echo +++++ PWD : `pwd` +++++
echo +++++ Running git pull +++++
git pull
echo +++++ Updating npm dependencies +++++
npm i
echo +++++ Removing log files ! +++++
# rm '/home/ubuntu/www/logs/gz-client.log'
echo ++++++ Deployed at `date` +++++++ >> '/home/ubuntu/www/logs/gz-client.log'
rm -r /home/ubuntu/www/gz
cp -r ./build /home/ubuntu/www/gz
