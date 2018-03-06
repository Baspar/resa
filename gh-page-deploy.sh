#!/bin/bash

# push to master

# git add --all
# echo "Commit msg:"
# read msg
#
# echo "Branch ?"
# read branch
#
# git commit -am $msg
# git push $branch
#
echo "wanna compile and send to ghpages ? [y/n]"

read answer

if [ $answer == "y" ]
then
    echo "dev or prod ?"
    read envBuild
    if [[ $envBuild != "build" || $envBuild != "prod" ]]
    then
        envBuild="prod"
    fi
    lein clean && lein cljsbuild once $envBuild
    path="/tmp/tmp_build"
    build="resources/public/*"
    mkdir -p $path
    cp -r $build $path
    git checkout gh-pages
    cp -r $path/* .
    rm -r js/compiled/out
    git add --all
    git commit -am "automatic deployement on gh-pages"
    git push origin gh-pages
fi

