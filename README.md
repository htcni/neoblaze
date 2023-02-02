<p align="center">
	<a href="https://neoblaze.vercel.app/">
		<img width="200px" alt="neoblaze" src="https://raw.githubusercontent.com/htcni/neoblaze/0e6a9afc1a96a1f8423f1e3cb65c12c09b542102/site/static/images/neoblaze_logo.svg">
	</a>
</p>

<h1 align="center">Neoblaze</h1>

<p align="center">Neoblaze helps you build responsive sites with blazing speed.</p>

<p align="center">
	<a aria-label="release" href="https://github.com/htcni/neoblaze/releases">
		<img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/htcni/neoblaze">
	</a>
		<a aria-label="license" href="https://github.com/htcni/neoblaze/blob/main/LICENSE">
		<img alt="License" src="https://img.shields.io/github/license/htcni/neoblaze">
	</a>	
		<a aria-label="npm" href="https://www.npmjs.com/package/neoblaze">
		<img alt="npm" src="https://img.shields.io/npm/v/neoblaze">
	</a>		
	<a aria-label="downloads" href="https://www.npmjs.com/package/neoblaze">
		<img alt="downloads" src="https://img.shields.io/npm/dm/neoblaze">
	</a>	
	<a aria-label="jsDeliver" href="https://www.jsdelivr.com/package/npm/neoblaze">
		<img alt="jsDeliver" src="https://data.jsdelivr.com/v1/package/npm/neoblaze/badge">
	</a>	
	<a aria-label="last commit" href="https://github.com/htcni/neoblaze/commits/main">
		<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/htcni/neoblaze">
	</a>	
</p>

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

Code copyright 2023 Nitin Bartwal. Code released under [the MIT license](./LICENSE).


[npm]: https://www.npmjs.com/
[neoblaze]: https://neoblaze.vercel.app/
[sass]: http://sass-lang.com/
