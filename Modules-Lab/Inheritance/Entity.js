class Entity {
    constructor(name){
        if (new.target === Entity){
            throw new Error("Abstract class!");
        }

        this.name = name;
    }
}
module.exports = Entity;