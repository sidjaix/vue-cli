# Hooks for Directives: 
> Vue provides a series of hooks for custom directives. Each hook has the option of a few arguments. Here are the hooks that are available:

``` bash
# bind 
This occurs once when the directive is attached to the element.

# inserted  
This occurs once the element is inserted into the parent DOM.

# update 
This occurs when the element updates, but children haven not been updated yet.

# componentUpdated 
This occurs once the component and the children have been updated.

#unbind 
This occurs once the directive is removed
```

> Each of these has el, binding and vnode arguments available to them. These arguments are:

``` bash
el — the element the binding sits on

binding — an object which contains the arguments that are passed into the hooks. There are many available arguments including name, value, oldValue, expression, arg and modifiers.

vnode — allows you to refer directly to the node in the virtual DOM if you need to.
```

## Both binding and vnode should be treated as read-only.

> update and componentUpdated both expose an additional argument called oldvnode. The oldvnode argument is used to differentiate between the older value passed and the newer value.

## Bind and update are the most useful of the five.

For detailed explanation on directives [Click Here](https://medium.com/js-dojo/creating-custom-directives-in-vue-js-286142392fd8).
