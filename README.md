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

# cmap

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a unary function to a single-precision floating-point strided input array and assign results to a single-precision floating-point strided output array.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
cmap = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-cmap@umd/bundle.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-cmap@umd/bundle.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.cmap;
})();
</script>
```

#### cmap( N, x, strideX, y, strideY, fcn )

Applies a unary function to a single-precision complex floating-point strided input array and assigns results to a single-precision complex floating-point strided output array.

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );
var cceilf = require( '@stdlib/math-base-special-cceilf' );

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
var Complex64Array = require( '@stdlib/array-complex64' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );
var cceilf = require( '@stdlib/math-base-special-cceilf' );

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
var Complex64Array = require( '@stdlib/array-complex64' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );
var cceilf = require( '@stdlib/math-base-special-cceilf' );

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
var Complex64Array = require( '@stdlib/array-complex64' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );
var cceilf = require( '@stdlib/math-base-special-cceilf' );

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
var Complex64Array = require( '@stdlib/array-complex64' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );
var cceilf = require( '@stdlib/math-base-special-cceilf' );

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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/bundle.js"></script>
<script type="text/javascript">
(function () {.factory;
var Complex64Array = require( '@stdlib/array-complex64' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );
var Complex64 = require( '@stdlib/complex-float32' );
var cmap = require( '@stdlib/strided-base-cmap' );

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

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-cmap.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-cmap

[test-image]: https://github.com/stdlib-js/strided-base-cmap/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/strided-base-cmap/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-cmap/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-cmap?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-cmap.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-cmap/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/strided-base-cmap/tree/deno
[umd-url]: https://github.com/stdlib-js/strided-base-cmap/tree/umd
[esm-url]: https://github.com/stdlib-js/strided-base-cmap/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-cmap/main/LICENSE

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/umd

</section>

<!-- /.links -->
