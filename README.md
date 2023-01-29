<p align="center">
	<a>
  	<img width="200px" alt="" src="./site/static/images/neoblaze_logo.svg">
	</a>
</p>

<h1 align="center">Neoblaze</h1>

<p align="center">Neoblaze helps you build responsive sites with blazing speed.</p>

<p align="center">
  <a aria-label="last commit" href="https://github.com/htcni/neoblaze/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/htcni/neoblaze">
  </a>
</p>

## Documentation

The documentation resides in the [site](site) directory, is built with [Hugo](https://gohugo.io/) and publicly hosted on Vercel <https://neoblaze.vercel.app/>. 

## Install
You can install `neoblaze` with this command:

```sh
npm install neoblaze
```

## Usage
The included source files are written in [Sass] using SCSS syntax.  After installation, you can import the CSS file into your project.

```scss
@forward "~neoblaze/src/scss/neoblaze.scss";
```

You can import individual neoblaze modules:

```scss
@forward "~neoblaze/src/scss/utilities/_index.scss";
```



## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)


[npm]: https://www.npmjs.com/
[neoblaze]: https://neoblaze.vercel.app/
[sass]: http://sass-lang.com/
