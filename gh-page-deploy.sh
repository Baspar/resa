#!/bin/bash
PROJ_PATH="/tmp/tmp_build"
PROJ_BUILD="resources/public/*"

dialog () {
    TEXT="# $1 #"
    BORDER=`echo $TEXT | sed 's/./#/g'`
    echo "$BORDER"
    echo "$TEXT"
    echo "$BORDER"
    echo ""
}


if curl -s localhost:3450 >> /dev/null
then
    echo "Please stop Lein before pushing"
    exit 1
fi

dialog "Please chose en environment to build [dev/prod] (default: prod)"
read envBuild
if [[ $envBuild != "build" || $envBuild != "prod" ]]
then
    envBuild="prod"
fi

dialog "Cleaning"
lein clean || {
    dialog "Can't clean"
    exit 1
}

dialog "Building"
lein cljsbuild once $envBuild || {
    dialog "Can't build"
    exit 1
}
rm -rf $PROJ_PATH
mkdir -p $PROJ_PATH
cp -r $PROJ_BUILD $PROJ_PATH
git checkout gh-pages || {
    dialog "Can't checkout to gh-pages"
    exit 1
}

dialog "Preparing repo..."
git rm -rf *
rm -rf *
mv $PROJ_PATH/* .
mv resa/images images

dialog "Do you wanna do an automatic commit and push to gh-pages branches ? [y/n] (default: no)"
read answer
# if [[ $answer == "yes" ]]
# then
#     git add --all
#     git commit -am "automatic deployement on gh-pages"
#     git push origin gh-pages
#     git checkout master
# fi
#
dialog "Done."
