# place .nojekyll to bypass Jekyll processing
echo > .nojekyll
# if you are deploying to a custom domain
# echo 'www.example. com' > CNAME
git init
git checkout -В main
git add -A
git commit -m 'deploy'
# if you are deploying to https://<USERNAME>.github. io
# git push -f git@github. com: <USERNAME>/<USERNAME>.github. io.git main
# if you are deploying to io/<REPO>
git push -f git@github. com: clementmoreno0803/tips-calculator.git main:gh-pages
cd -
