import {expect} from "chai";
import Storex from "./";

import * as Storage from "node-localstorage";

const localStorage = new Storage.LocalStorage("./mock-ls");

const storex = new Storex({
    stateName: "test",
    state: {foo: "bar", baz: "bar"}
}, localStorage);


describe("Storage", () => {
    it("should property stringify and store Javascript object", () => {

    });
});

describe("Storex", () => {

    it("should properly set options.state", () => {
        expect(storex.options).to.be.a("object");
        expect(storex.options).to.haveOwnProperty("state");
        expect(storex.options).to.haveOwnProperty("stateName");
        expect(storex.options.state.foo).to.equal("bar");
    });

    it("should set getters and setters on options.state props", () => {
        const fooHasSetter = !!Object.getOwnPropertyDescriptor(storex.options.state, 'foo')['set'];
        const fooHasGetter = !!Object.getOwnPropertyDescriptor(storex.options.state, 'foo')['get'];
        const bazHasSetter = !!Object.getOwnPropertyDescriptor(storex.options.state, 'baz')['set'];
        const bazHasGetter = !!Object.getOwnPropertyDescriptor(storex.options.state, 'baz')['get'];
        expect(fooHasSetter).to.equal(true);
        expect(fooHasGetter).to.equal(true);
        expect(bazHasSetter).to.equal(true);
        expect(bazHasGetter).to.equal(true);
    })
});
