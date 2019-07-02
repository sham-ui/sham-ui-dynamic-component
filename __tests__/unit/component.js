import renderer, { compile } from 'sham-ui-test-helpers';
import DynamicComponent from '../../src/component';

it( 'empty options', () => {
    const meta = renderer( DynamicComponent, {} );
    expect( meta.toJSON() ).toMatchSnapshot();
} );

it( 'component', () => {
    const meta = renderer( DynamicComponent, {
        component: compile`<div>Foo component content</div>`
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
} );

it( 'component options', () => {
    const meta = renderer( DynamicComponent, {
        component: compile`<div>Foo component content. {{text}}</div>`,
        text: 'Extra text'
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
    meta.component.update( {
        text: 'Another extra text'
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
} );

it( 'update component', () => {
    const meta = renderer( DynamicComponent, {
        component: compile`<div>Foo component content. {{text}}</div>`,
        text: 'Extra text'
    } );
    expect( meta.toJSON() ).toMatchSnapshot();

    meta.component.update( {
        component: compile`<div>Bar component content. {{text}}</div>`
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
} );

describe( 'blocks', () => {
    beforeEach( () => window.DynamicComponent = DynamicComponent );
    afterEach( () => delete window.DynamicComponent );

    it( 'blocks', () => {
        const meta = renderer(
            compile`
            <DynamicComponent 
                component={{component}}  
                text={{text}}
            >
                {% block 'title' %}
                    Title for component
                {% endblock %}
            </DynamicComponent>
        `,
            {
                component: compile`
                    <h3>{% defblock 'title' %}</h3>
                    <div>Foo component content. {{text}}</div>
                `,
                text: 'Extra text'
            }
        );
        expect( meta.toJSON() ).toMatchSnapshot();

        meta.component.update( {
            component: compile`<div>Component without block</div>`
        } );
        expect( meta.toJSON() ).toMatchSnapshot();
    } );
} );

