<p align="center">
  <a href="https://somiibo.com">
    <img src="https://cdn.itwcreativeworks.com/assets/somiibo/images/logo/somiibo-brandmark-blue-x.svg" width="100px">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/package-json/v/somiibo/Somiibo.svg">
  <br>
  <img src="https://img.shields.io/librariesio/release/npm/Somiibo.svg">
  <img src="https://img.shields.io/bundlephobia/min/Somiibo.svg">
  <img src="https://img.shields.io/codeclimate/maintainability-percentage/somiibo/Somiibo.svg">
  <img src="https://img.shields.io/npm/dm/Somiibo.svg">
  <img src="https://img.shields.io/node/v/Somiibo.svg">
  <img src="https://img.shields.io/website/https/somiibo.com.svg">
  <img src="https://img.shields.io/github/license/somiibo/Somiibo.svg">
  <img src="https://img.shields.io/github/contributors/somiibo/Somiibo.svg">
  <img src="https://img.shields.io/github/last-commit/somiibo/Somiibo.svg">
  <br>
  <br>
  <a href="https://somiibo.com">Site</a> | <a href="https://www.npmjs.com/package/Somiibo">NPM Module</a> | <a href="https://github.com/somiibo/Somiibo">GitHub Repo</a>
  <br>
  <br>
  <strong>Somiibo</strong> is the official npm module of <a href="https://somiibo.com">Somiibo</a>, a free app for creating custom text snippets that you can access on all of your devices!
</p>

## 🌐 Somiibo Works in Node AND browser environments
Yes, this module works in both Node and browser environments, including compatibility with [Webpack](https://www.npmjs.com/package/webpack) and [Browserify](https://www.npmjs.com/package/browserify)!

## 🦄 Features
* Getting proxy lists

## 🔑 Getting an API key
You can use so much of `Somiibo` for free, but if you want to do some advanced stuff, you'll need an API key. You can get one by [signing up for a Somiibo account](https://somiibo.com/signup).

## 📦 Install Somiibo
### Option 1: Install via npm
Install with npm if you plan to use `Somiibo` in a Node project or in the browser.
```shell
npm install Somiibo
```
If you plan to use `Somiibo` in a browser environment, you will probably need to use [Webpack](https://www.npmjs.com/package/webpack), [Browserify](https://www.npmjs.com/package/browserify), or a similar service to compile it.

```js
const Somiibo = new (require('Somiibo'))({
  // Not required, but having one removes limits (get your key at https://somiibo.com).
  apiKey: 'api_test_key'
});
```

### Option 2: Install via CDN
Install with CDN if you plan to use Somiibo only in a browser environment.
```html
<script src="https://cdn.jsdelivr.net/npm/Somiibo@latest/dist/index.min.js"></script>
<script type="text/javascript">
  var Somiibo = new Somiibo({
    // Not required, but having one removes limits (get your key at https://somiibo.com).
    apiKey: 'api_test_Key'
  });
</script>
```

### Option 3: Use without installation
You can use `Somiibo` in a variety of ways that require no installation, such as `curl` in terminal/shell.

```shell
# Standard
curl -X POST https://api.somiibo.com
```

## ⚡️ Usage
### Somiibo.run(options)
```js
Somiibo.run(options);
```

## 📘 Using Somiibo
After you have followed the install step, you can start using `Somiibo` to create custom text snippets that you can access on all of your devices

For a more in-depth documentation of this library and the Somiibo service, please visit the official Somiibo website.

## 📝 What Can Somiibo do?
Social media automation bot for Instagram, Facebook, Twitter, SoundCloud, LinkedIn, Pinterest, Google+, Spotify, Tumblr, and more.

## 🗨️ Final Words
If you are still having difficulty, we would love for you to post
a question to [the Somiibo issues page](https://github.com/somiibo/Somiibo/issues). It is much easier to answer questions that include your code and relevant files! So if you can provide them, we'd be extremely grateful (and more likely to help you find the answer!)

## 📚 Projects Using this Library
* [ITW Creative Works](https://itwcreativeworks.com)
* [Somiibo](https://somiibo.com)
* [Slapform](https://slapform.com)
* [StudyMonkey](https://studymonkey.ai)
* [DashQR](https://dashqr.com)
* [Replyify](https://replyify.app)
* [SoundGrail](https://soundgrail.com)
* [Trusteroo](https://trusteroo.com)

Ask us to have your project listed! :)
