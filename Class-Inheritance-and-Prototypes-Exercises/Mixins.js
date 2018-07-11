function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };

        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4);
        };

        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)
        };
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            return this.manufacturer === this.keyboard.manufacturer && this.manufacturer === this.monitor.manufacturer;
        };

        classToExtend.prototype.isClassy = function () {
            return this.battery.expectedLife >= 3
                && (this.color === "Silver" || this.color === "Black")
                && this.weight < 3;
        }
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}

let mixins = createMixins();
let computerQualityMixin = mixins.computerQualityMixin;
let styleMixin = mixins.styleMixin;

class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
        // if (new.target === Computer) {
        //     throw new Error("Abstract Class!")
        // }

        this.manufacturer = manufacturer;
        this.processorSpeed = processorSpeed;
        this.ram = ram;
        this.hardDiskSpace = hardDiskSpace;
    }
}

computerQualityMixin(Computer);
styleMixin(Computer);
let comp = new Computer("HP", 2.3, 4, 1000);
console.log(comp.isRoomy());