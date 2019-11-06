# sham-ui-dynamic-component

[![Build Status](https://travis-ci.com/sham-ui/sham-ui-dynamic-component.svg?branch=master)](https://travis-ci.com/sham-ui/sham-ui-dynamic-component)
[![npm version](https://badge.fury.io/js/sham-ui-data-storage.svg)](https://badge.fury.io/js/sham-ui-dynamic-component)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

Dynamic component for sham-ui

## Install
```bash
# npm
npm install sham-ui-dynamic-component
```

```bash
# yarn
yarn add sham-ui-dynamic-component
```

## API

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
