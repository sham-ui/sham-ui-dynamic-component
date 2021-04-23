import App from '../components/App.sfc';
import * as directives from 'sham-ui-directives';

export default function( DI ) {
    new App( {
        DI,
        ID: 'app',
        container: document.querySelector( 'body' ),
        directives
    } );
}
