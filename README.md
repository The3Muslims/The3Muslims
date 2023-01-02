# The 3 Muslims

## To get started:
- Clone repository with `git clone https://github.com/The3Muslims/The3Muslims.git`
- Checkout to master branch with `git checkout master`
- Install packages with `yarn install` or `npm install`
- Run `yarn dev` or `npm run dev`

## Development Cycle
To avoid accidental overwriting of content between developers follow these steps when developing new features:
- Create a new branch with the following command and give it an appropriate name eg:
  `git checkout -b "feat/home-page-tweaks"`
- Once finished with your feature, merge your commits to the `master` branch:
  ```
  git checkout master
  git merge "feat/home-page-details"
  ```

## Good Git practices
- Try to commit & push every stable change/fix you make and give it an appropriate name:
  ```
  git add .
  git commit -m "fix: home page navbar"
  git push
  ```
- Try to follow git commit naming conventions:
    - feat: The new feature you're adding to a particular application
    - fix: A bug fix
    - style: Feature and updates related to styling
    - refactor: Refactoring a specific section of the codebase
    - test: Everything related to testing
    - docs: Everything related to documentation
    - chore: Regular code maintenance.