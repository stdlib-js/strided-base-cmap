<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# cmap

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a unary function to a single-precision floating-point strided input array and assign results to a single-precision floating-point strided output array.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import cmap from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-cmap@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/strided-base-cmap/tags). For example,

```javascript
import cmap from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-cmap@v0.2.2-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-cmap@deno/mod.js';
```

#### cmap( N, x, strideX, y, strideY, fcn )

Applies a unary function to a single-precision complex floating-point strided input array and assigns results to a single-precision complex floating-point strided output array.

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@deno/mod.js';
import cceilf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cceilf@deno/mod.js';

var x = new Complex64Array( [ -2.3, 1.5, 3.1, -5.2, 4.8, 0.0, -1.6, 3.4 ] );
var y = new Complex64Array( x.length );

cmap( x.length, x, 1, y, 1, cceilf );

var v = y.get( 0 );
// returns <Complex64>

var re = real( v );
// returns -2.0

var im = imag( v );
// returns 2.0
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `x`.
-   **y**: output [`Complex64Array`][@stdlib/array/complex64].
-   **strideY**: index increment for `y`.
-   **fcn**: function to apply.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@deno/mod.js';
import cceilf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cceilf@deno/mod.js';

var x = new Complex64Array( [ -2.3, 1.5, 3.1, -5.2, 4.8, 0.0, -1.6, 3.4 ] );
var y = new Complex64Array( x.length );

cmap( 2, x, 2, y, -1, cceilf );

var v = y.get( 0 );
// returns <Complex64>

var re = real( v );
// returns 5.0

var im = imag( v );
// returns 0.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][@stdlib/array/complex64] views.

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@deno/mod.js';
import cceilf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cceilf@deno/mod.js';

// Initial arrays...
var x0 = new Complex64Array( [ -2.3, 1.5, 3.1, -5.2, 4.8, 0.0, -1.6, 3.4 ] );
var y0 = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Complex64Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

cmap( 2, x1, -2, y1, 1, cceilf );

var v = y0.get( 2 );
// returns <Complex64>

var re = real( v );
// returns -1.0

var im = imag( v );
// returns 4.0
```

#### cmap.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, fcn )

Applies a unary function to a single-precision complex floating-point strided input array and assigns results to a single-precision complex floating-point strided output array using alternative indexing semantics.

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@deno/mod.js';
import cceilf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cceilf@deno/mod.js';

var x = new Complex64Array( [ -2.3, 1.5, 3.1, -5.2, 4.8, 0.0, -1.6, 3.4 ] );
var y = new Complex64Array( x.length );

cmap.ndarray( x.length, x, 1, 0, y, 1, 0, cceilf );

var v = y.get( 0 );
// returns <Complex64>

var re = real( v );
// returns -2.0

var im = imag( v );
// returns 2.0
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][@stdlib/array/complex64] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y` in reverse order,

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@deno/mod.js';
import cceilf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cceilf@deno/mod.js';

var x = new Complex64Array( [ -2.3, 1.5, 3.1, -5.2, 4.8, 0.0, -1.6, 3.4 ] );
var y = new Complex64Array( x.length );

cmap.ndarray( 2, x, 2, 1, y, -1, y.length-1, cceilf );

var v = y.get( y.length-1 );
// returns <Complex64>

var re = real( v );
// returns 4.0

var im = imag( v );
// returns -5.0
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform' ).factory;
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@deno/mod.js';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@deno/mod.js';
import cmap from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-cmap@deno/mod.js';

function scale( x ) {
    var re = real( x );
    var im = imag( x );
    return new Complex64( re*10.0, im*10.0 );
}

var xbuf = filledarrayBy( 10*2, 'float32', discreteUniform( -100.0, 100.0 ) );
var x = new Complex64Array( xbuf.buffer );
console.log( x );

var y = new Complex64Array( x.length );
console.log( y );

cmap.ndarray( x.length, x, 1, 0, y, -1, y.length-1, scale );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/strided-base/zmap`][@stdlib/strided/base/zmap]</span><span class="delimiter">: </span><span class="description">apply a unary function to a double-precision complex floating-point strided input array and assign results to a double-precision complex floating-point strided output array.</span>
-   <span class="package-name">[`@stdlib/strided-base/unary`][@stdlib/strided/base/unary]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a strided input array and assign results to elements in a strided output array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-cmap.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-cmap

[test-image]: https://github.com/stdlib-js/strided-base-cmap/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/strided-base-cmap/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-cmap/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-cmap?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-cmap.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-cmap/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/strided-base-cmap/tree/deno
[deno-readme]: https://github.com/stdlib-js/strided-base-cmap/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/strided-base-cmap/tree/umd
[umd-readme]: https://github.com/stdlib-js/strided-base-cmap/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/strided-base-cmap/tree/esm
[esm-readme]: https://github.com/stdlib-js/strided-base-cmap/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/strided-base-cmap/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-cmap/main/LICENSE

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/deno

<!-- <related-links> -->

[@stdlib/strided/base/zmap]: https://github.com/stdlib-js/strided-base-zmap/tree/deno

[@stdlib/strided/base/unary]: https://github.com/stdlib-js/strided-base-unary/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
