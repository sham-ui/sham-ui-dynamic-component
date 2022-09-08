import { $ } from 'sham-ui-macro/ref.macro';
import { Component, insert, createChildContext } from 'sham-ui';

/**
 * Component-wrapper for dynamic insert components
 * @class Dynamic
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
export default Component( function( options ) {
    const component = $();

    options( {

        /**
         * Option. Wrapped component
         * @type {Function}
         * @memberof Dynamic
         */
        [ component ]: null
    } );

    const ctx = createChildContext(
        this,
        this.ctx.container
    );

    let lastRenderedComponent = null;
    this.addSpots( [
        component,
        wrappedComponent => {
            if ( lastRenderedComponent !== wrappedComponent ) {

                // Remove all nested views.
                let i = this.nested.length;
                while ( i-- ) {
                    this.nested[ i ].remove();
                }
            }
            if ( wrappedComponent ) {
                insert( ctx, wrappedComponent, this.__data__ );
            }
            lastRenderedComponent = wrappedComponent;
        }
    ] );
} );
