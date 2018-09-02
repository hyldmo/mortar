# Docker - https://docs.docker.com/engine/installation/linux/ubuntulinux/
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates
sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D

## Install
sudo apt-get update
sudo apt-get install docker-engine

## Run
sudo service docker start

# Docker compose
sudo curl -L https://github.com/docker/compose/releases/download/1.7.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Gitlab
# https://about.gitlab.com/installation/
# Gitlab with apache 
# https://gitlab.com/gitlab-org/gitlab-recipes/blob/master/web-server/apache/README.md