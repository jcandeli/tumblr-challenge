### How to run
```bash
git clone git@github.com:jcandeli/tumblr-challenge.git
npm i
npm start
```

### How to test
`npm test`
*Note* if you get an error saying `Error: Error watching file for changes: EMFILE`, doing `brew install watchman` seemed to fix it.

### Front end stack
* react
* redux
* sagas
* SASS
* jest
* enzyme

### Notes
The reason I created a `Component.js` and `index.js` file in each component folder is so that I can import like so
`import Component from './components/Component'` (instead of `import Component from './components/Component/Component'`)
while being able see the component name in the editor tabs instead of multiple `index.js` file names.

I don't like how the bootstrapped project I used creates multiple css files from the SASS files instead of compiling to one but it didn't bother me enough to spend time trying to figure out a better way.

I have a very specific way of writing 'componentized' CSS which I can explain better in person but the basic idea is that we should break up CSS into components to minimize repetition, eliminate discrepencies, and ultimately create reusable CSS which is easy to maintain just like how we break our javascript and HTML into components.

 
 ### Things I would like to add 
 * back to top button
 * notification that it was favorited when so you can tell when you are scrolled down the page
 * some subtle animations
 * add more meta data for each post