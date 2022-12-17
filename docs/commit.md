yarn add -D commitizen cz-conventional-changelog -W
yarn add -D @commitlint/cli @commitlint/config-conventional husky -W

add - commitlint.config.js
module.exports = {
extends: ['@commitlint/config-conventional']
}

lerna --

"command": {
"publish": {
"conventionalCommits": true
}
}

package.json - root

"scripts": {
....
"commit": "yarn git-cz",
}
"config": {
"commitizen": {
"path": "cz-conventional-changelog"
}
},
"husky": {
"hooks": {
"commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
}
}
