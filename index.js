var fs = require( 'fs' );
var chalk = require( 'chalk' );

fs.readFile( 'message.txt', 'utf8', function( err, msg ) {
    if ( err ) {
        throw err;
    }

    console.log( chalk.bold.red( msg ) );
} );
