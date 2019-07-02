import App from '../components/App.sfc';
import * as directives from 'sham-ui-directives';

export default function() {
    new App( {
        ID: 'app',
        containerSelector: 'body',
        directives
    } );
}
