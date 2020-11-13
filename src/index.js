const Foo = require('./Foo');
const Bar = require('./Bar');

const foo = new Foo();
const bar = new Bar(foo);

bar.runBar();
