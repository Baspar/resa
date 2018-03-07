#!/bin/bash

echo "Please chose en environement to build [dev/prod] (default: prod)"
read envBuild
if [[ $envBuild != "build" || $envBuild != "prod" ]]
then
    envBuild="prod"
fi
lein clean && lein cljsbuild once $envBuild
path="/tmp/tmp_build"
build="resources/public/*"
rm -rf $path
mkdir -p $path
cp -r $build $path
git checkout gh-pages
echo "Cleaning repo..."
rm -rf images/ css/ js/ index.html card.html
echo "Adding some files..."
mv $path/* .
echo "Mopping the floor..."
rm -rf js/compiled/out
echo "Do you wanna do an automatic commit and push to gh-pages branches ? [y/n] (default: no)"
read answer
if [[ $answer == "yes" ]]
then
    git add --all
    git commit -am "automatic deployement on gh-pages"
    git push origin gh-pages
    git checkout master
fi

echo "Done."
