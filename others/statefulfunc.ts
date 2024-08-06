const { mycalled } = new class {
    count = 0;
    mycalled = () => {
        this.count++;
        console.log("called ", this.count);
    }
};

mycalled();
mycalled();
