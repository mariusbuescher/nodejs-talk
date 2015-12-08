var fs = require( 'fs' );

fs.readFile( 'message.txt', 'utf8', function( err, msg ) {
    if ( err ) {
        throw err;
    }

    console.log( msg );
} );
