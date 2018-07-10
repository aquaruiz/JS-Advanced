function createMixins() {
    function computerQualityMixin (classToExtend) {
        function getQuality() {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        }
        
        function isFast() {
            return this.processorSpeed > (this.ram / 4);
        }
        
        function isRoomy() {
            return this.hardDiskSpace  > Math.floor(this.ram * this.processorSpeed)
        }

        classToExtend.prototype.getQuality = getQuality;
        classToExtend.prototype.isFast = isFast;
        classToExtend.prototype.isRoomy = isRoomy;
    }

    function styleMixin(classToExtend) {
        function isFullSet() {
            return this.manufacturer === this.keyboard.manufacturer && this.manufacturer === this.monitor.manufacturer;
        }
        
        function isClassy() {
            return this.battery.expectedLife >= 3
                && (this.color === "Silver" || this.color === "Black")
                && this.weight < 3;
        }

        classToExtend.prototype.isFullSet = isFullSet;
        classToExtend.prototype.isClassy = isClassy;
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}