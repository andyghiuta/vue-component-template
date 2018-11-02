import Vue from 'vue';
import ComponentOne from './ComponentOne.vue';

const components = {
  ComponentOne,
};

// global register components
function register() {
  Object.keys(components).forEach(name => Vue.component(
    `${LIBNAME}${name}`,
    components[name],
    {
      name: `${LIBNAME}${name}`,
    }
  ));
}

export { register };

export default components;
