# Lipa Component Library

This component library is a collection of all components that are needed to create our React web frontends. It is 
published to GitHub and can be added to a project with `npm install github:getlipa/lipa-component-library#{tag}`.
To publish a new version of the library use the `npm run build` and then push a new commit with a tag to GitHub.

## Add a component

To keep everything organised each component has its own folder inside the components folder. Each component folder 
contains at least three files. First there is the component itself second there is a story file for the component to 
showcase different stories of the component. And last ther is an `index.ts` to export the component to have the import 
while using the library a lot easier.

Also notice when creating a new component to export the folder in the index.ts located in the `src` directory.

## Deprecate

TODO

Auch struktur machen

## Storybook

To showcase all the components we are using Storybook. To have Stories for your component you need to have a file ending
on `.stories.tsx`. In this file you need to define the metadata such as the `title`, `argTypes`, what component it is
and so on. After that you can export all your different stories with what ever args you want.

### Usage

To run Storybook use `npm run storybook`

## Backstop Js

To visually test all our stories we decided to use Backstop Js. With the viewports option in the
[backstop.json](backstop.json) can define on what size of screens we want to have to render the components. And with the
scenarios config we can define what component should how be tested. To use the components showcased from Storybook, we
can use the iFrame url created by Storybook which is `http://localhost:6006/iframe.html?viewMode=story&id={component-title}--{story-name}}`.

### Usage

- Create a new reference snapshots `backstop:reference`
- Test all scenarios against the reference snapshots `backstop:test`

## Tailwind

To not do the whole css on our own we are using Tailwind. This creates css classes for all possible customisation option
ready to use, which we can then add to our components. With that if we want e.g. to give something a different 
background we can just add the corresponding Tailwind generate class to it, which in this case could be `bg-red-500`. 

### Headlessui

Headlessui is a library for different "low level" components like dropdown menus, selection menus or other stuff that 
requires JavaScript. We want to use it as it makes simple components like dropdown menus a lot easier and clean.

### Tailwindui

Tailwindui provides us with some already designed ui components that we can use and customise. Tailwindui gives us the 
code for their component to copy to our project. With this approach it very easy to customise the components. Also 
Tailwind makes use of Headlessui in some components.

### Tailgrids

Tailgrids is also a collection of pre designed components which can be copied to our own library different from 
Tailwindui it does not use Headlessio which makes the component more blown up with JavaScript. So the usage of 
Tailwindui components is preferred to Tailgrid components. Nevertheless, Tailgird has a huge collection of usefull 
components to use.
