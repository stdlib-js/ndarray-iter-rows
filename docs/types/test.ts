/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import zeros = require( '@stdlib/ndarray-zeros' );
import nditerRows = require( './index' );


// TESTS //

// The function returns an iterator...
{
	nditerRows( zeros( [ 2, 2 ] ) ); // $ExpectType Iterator<typedndarray<number>>
	nditerRows( zeros( [ 2, 2 ] ), {} ); // $ExpectType Iterator<typedndarray<number>>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nditerRows( 123 );  // $ExpectError
	nditerRows( true ); // $ExpectError
	nditerRows( false ); // $ExpectError
	nditerRows( null ); // $ExpectError
	nditerRows( undefined ); // $ExpectError
	nditerRows( {} ); // $ExpectError
	nditerRows( [] ); // $ExpectError
	nditerRows( ( x: number ): number => x ); // $ExpectError

	nditerRows( 123, {} );  // $ExpectError
	nditerRows( true, {} ); // $ExpectError
	nditerRows( false, {} ); // $ExpectError
	nditerRows( null, {} ); // $ExpectError
	nditerRows( undefined, {} ); // $ExpectError
	nditerRows( {}, {} ); // $ExpectError
	nditerRows( [], {} ); // $ExpectError
	nditerRows( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	nditerRows( zeros( [ 2, 2 ] ), 'abc' ); // $ExpectError
	nditerRows( zeros( [ 2, 2 ] ), 123 ); // $ExpectError
	nditerRows( zeros( [ 2, 2 ] ), true ); // $ExpectError
	nditerRows( zeros( [ 2, 2 ] ), false ); // $ExpectError
	nditerRows( zeros( [ 2, 2 ] ), null ); // $ExpectError
	nditerRows( zeros( [ 2, 2 ] ), [] ); // $ExpectError
	nditerRows( zeros( [ 2, 2 ] ), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is not a boolean...
{
	nditerRows( zeros( [ 2, 2 ] ), { 'readonly': 'abc' } ); // $ExpectError
	nditerRows( zeros( [ 2, 2 ] ), { 'readonly': 123 } ); // $ExpectError
	nditerRows( zeros( [ 2, 2 ] ), { 'readonly': null } ); // $ExpectError
	nditerRows( zeros( [ 2, 2 ] ), { 'readonly': [] } ); // $ExpectError
	nditerRows( zeros( [ 2, 2 ] ), { 'readonly': {} } ); // $ExpectError
	nditerRows( zeros( [ 2, 2 ] ), { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	nditerRows(); // $ExpectError
	nditerRows( zeros( [ 2, 2 ] ), {}, {} ); // $ExpectError
}
