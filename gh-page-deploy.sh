#!/bin/bash
PROJ_PATH="/tmp/tmp_build"
PROJ_BUILD="resources/public/*"


if curl -s localhost:3450 >> /dev/null
then
    echo "Please stop Lein before pushing"
    exit 1
fi

echo "Please chose en environment to build [dev/prod] (default: prod)"
read envBuild
if [[ $envBuild != "build" || $envBuild != "prod" ]]
then
    envBuild="prod"
fi

lein clean && lein cljsbuild once $envBuild
rm -rf $PROJ_PATH
mkdir -p $PROJ_PATH
cp -r $PROJ_BUILD $PROJ_PATH
git checkout gh-pages

echo "Preparing repo..."
git rm -rf *
rm -rf *
mv $PROJ_PATH/* .

# rm -rf js/compiled/out
echo "Do you wanna do an automatic commit and push to gh-pages branches ? [y/n] (default: no)"
read answer
# if [[ $answer == "yes" ]]
# then
#     git add --all
#     git commit -am "automatic deployement on gh-pages"
#     git push origin gh-pages
#     git checkout master
# fi
#
echo "Done."
