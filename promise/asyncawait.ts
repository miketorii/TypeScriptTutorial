function delay(mils: number, count: number): Promise<number>{
    return new Promise<number>(
        resolve => { setTimeout(
            () => { resolve(count); }
            ,mils ); }
    );
}

async function dramaticWelcome(): Promise<void> {
    console.log("Hello");

    for (let i=0; i < 5; i++){
        const count: number = await delay(500, i);
        console.log(count);
    }
    console.log("World");
}

dramaticWelcome();
