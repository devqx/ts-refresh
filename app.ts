function loggeable(construct: Function) {
    construct.prototype.warn = function (message: string) {
        console.warn(message);
    }

    construct.prototype.table = function (table: {}) {
        console.table(table);
    }
}

@loggeable
class Logger { }

let logger = new Logger();
(<any>logger).warn("hey paul")
    (<any>logger).table({ name: "paul", age: 98 })
