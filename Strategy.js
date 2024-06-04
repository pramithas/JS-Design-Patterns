function Fedex() {
    this.calculate = package => {
        return 'Fedex: 2.5';
    }
}

function UPS() {
    this.calculate = package => {
        return 'UPS: 1.45'
    }
}

function USPS() {
    this.calculate = package => {
        return 'USPS: 4.5'
    }
}

function Shipping() {
    this.company = "";
    this.setStrategy = (company) => {
        this.company = company;
    }

    this.calculate = (package) => {
        return this.company.calculate(package);
    }
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

const package = {from: 'Kathmandu', to: 'Georgia', weight: 1.56};

const shipping = new Shipping();
shipping.setStrategy(fedex);
console.log(shipping.calculate(package));

