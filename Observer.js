function Subject() {
    this.observers = [];
}

Subject.prototype = {

    subscribe: function(observer){
        this.observers.push(observer);
    },
    unSubscribe: function(observer){
        this.observers = this.observers.filter(func => {
            return func != observer
        });
    },
    fire: function(){
        this.observers.forEach(fn => {
            fn.call();
        })
    }
}

const subject = new Subject();

function Observer1() {
    console.log("Observer 1 firing");
}

function Observer2() {
    console.log("Observer 2 firing");
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.unSubscribe(Observer2);
subject.fire();