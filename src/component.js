import { Component, options } from 'sham-ui';

export default class DynamicComponent extends Component {
    /** @type {Function|null} */
    @options component = undefined;

    constructor() {
        super( ...arguments );
        this.ref = null;
        this.blocks = null;
        this.lastRenderedComponent = null;
    }

    updateSpots( data ) {
        if ( data.component !== undefined ) {
            this._insertComponent( data );
        }
    }

    _insertComponent( options ) {
        const { component } = options;
        if ( null !== this.lastRenderedComponent && this.lastRenderedComponent !== component ) {
            this._clearContainer();
        }
        window.__UI__.insert(
            this,
            this.container,
            this,
            component,
            options,
            this.owner
        );
        this.blocks = this.ref.blocks || {};
        this.lastRenderedComponent = component;
    }

    _clearContainer() {

        // Remove all nested views.
        let i = this.nested.length;
        while ( i-- ) {
            this.UI.render.unregister( this.nested[ i ].ID );
        }
        this.blocks = null;
    }
}
