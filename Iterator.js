const items = ["Pramithas", "dev", 1, 4500];

function Iterator(items) {
    this.items = items;
    this.index = 0;
}

Iterator.prototype = {

    hasNext: function() {
        return this.index < this.items.length;
    },
    next: function() {
        return this.items[this.index++];
    }
}

const itr = new Iterator(items);
while(itr.hasNext()){
    console.log(itr.next());
    // console.log(itr.hasNext());
}