#!/usr/bin/env sh

set -e
yarn docs:build
cd docs/.vuepress/dist

echo 'docs.tlca.eu' > CNAME

git init
git add -A
git commit -m 'Deploy'

git push -f git@github.com:TLCA-project/tlca-docs.git master:gh-pages

cd -
