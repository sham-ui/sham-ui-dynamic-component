import { Component } from 'sham-ui';
import { options } from 'sham-ui-macro/babel.macro';

/**
 * Component-wrapper for dynamic insert components
 * @example
 * {% Dynamic from 'sham-ui-dynamic-component' %}
 *
 * <!-- Can use as in-place inserted component -->
 * <Dynamic
 *  component={{Foo}}
 *  componentOption={{optionValue}}/>
 *
 * <!-- Can use as block component -->
 * <Dynamic
 *   component={{Foo}}
 *   componentOption={{optionValue}}
 * >
 *   {% block 'default' %}
 *     Blocks also supported
 *   {% endblock %}
 * <Dynamic/>
 */
export default class Dynamic extends Component {
    /**
     * Option. Component for insert
     * @type {Function|undefined}
     */
    @options component = undefined;

    constructor() {
        super( ...arguments );
        this.ref = null;
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
            this.owner,
            this.blocks
        );
        this.lastRenderedComponent = component;
    }

    _clearContainer() {

        // Remove all nested views.
        let i = this.nested.length;
        while ( i-- ) {
            this.nested[ i ].remove();
        }
    }
}
