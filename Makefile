BRANCH=$(shell git rev-parse --abbrev-ref HEAD)

mergeOnMaster:
	git checkout master
	git merge $(BRANCH)
	git push
	git checkout $(BRANCH)

dev:
	meteor npm install
	meteor

prod:
	meteor npm install
	nohup meteor --production -p 6000 &
