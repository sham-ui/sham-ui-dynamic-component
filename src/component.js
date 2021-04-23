import { Component, insert } from 'sham-ui';
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

    constructor( options ) {
        super( options );
        this.ref = null;
        this.lastRenderedComponent = null;
        this.spots = [
            [
                'component',
                ::this._insertComponent
            ]
        ];
    }

    _insertComponent( component ) {
        if ( null !== this.lastRenderedComponent && this.lastRenderedComponent !== component ) {
            this._clearContainer();
        }
        insert(
            this,
            this.container,
            this,
            component,
            this.__data__,
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
