var fs = require( 'fs' );
var chalk = require( 'chalk' );
var sass = require( 'node-sass' );

fs.readFile( 'message.txt', 'utf8', function( err, msg ) {
    if ( err ) {
        throw err;
    }

    console.log( chalk.bold.red( msg ) );
} );

sass.render( {
    file: 'main.scss',
}, function( err, result ) {
    if ( err ) {
        throw err;
    }

    fs.writeFile( 'main.css', result.css );
} );

