class Foo {
    runFoo = () => {
        console.log('run foo');
    }
}

class Bar {
    #foo;

    /**
     *
     * @param {Foo} foo
     */
    constructor(foo) {
        this.#foo = foo;
    }

    runBar = () => {
        console.log('run bar');
        this.#foo.runFoo();
    };
}

const foo = new Foo();
const bar = new Bar(foo);

bar.runBar();
