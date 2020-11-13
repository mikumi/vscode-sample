module.exports = class Bar {
    #foo;

    constructor(foo) {
        this.#foo = foo;
    }

    runBar = () => {
        console.log('run bar');
        this.#foo.runFoo();
    };
}
