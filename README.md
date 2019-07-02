# sham-ui-dynamic-component

> Dynamic component for sham-ui

## Install
```bash
# npm
npm install sham-ui-dynamic-component
```

```bash
# yarn
yarn add sham-ui-dynamic-component
```

## Usage
```html
{% Dynamic from 'sham-ui-dynamic-component' %}
...
    <Dynamic 
      component={{Foo}} 
      componentOption={{optionValue}}/>
...
    <Dynamic 
      component={{Foo}} 
      componentOption={{optionValue}}
    >
        {% block 'default' %}
            Blocks also support
        {% endblock %}
    <Dynamic/>
```
