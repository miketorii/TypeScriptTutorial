abstract class Food {
    constructor(protected name: string, protected calorie: number){        
    }
    showDebug(){
        console.log(this.name);
        console.log(this.calorie);
    }
    abstract keepRef() : boolean;
}

class Meat extends Food {
    keepRef() : boolean {
        return true;
    }
}

let meat = new Meat('beef', 1234);
meat.showDebug();