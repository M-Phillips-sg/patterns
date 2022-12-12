interface ISubject {
    subsribe(observer: Observer): void;
    unSubscribe(observer: Observer): void;
    notify(): void;
}

interface IObserver {
    update(): void;
}

class Subject implements ISubject {
    subsribe(observer: Observer): void {
        throw new Error("Method not implemented.");
    }
    unSubscribe(observer: Observer): void {
        throw new Error("Method not implemented.");
    }
    notify(): void {
        throw new Error("Method not implemented.");
    }
}

class Observer implements IObserver {
    constructor(public readonly id:number) {}
    update() {
       console.log(`Observer ${this.id} is updating...`)
    }
}