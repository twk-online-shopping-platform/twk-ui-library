#### dependency

yarn add -D commitizen cz-conventional-changelog -W
yarn add -D @commitlint/cli @commitlint/config-conventional husky -W

#### create commitlint.config.js file and add the following

module.exports = {
extends: ['@commitlint/config-conventional']
}

---

#### lerna - add the following

"command": {
"publish": {
"conventionalCommits": true
}
}

---

#### package.json - root

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
