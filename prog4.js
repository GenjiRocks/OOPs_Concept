// Polymorphism - Javascript does not support method overloading

class A{
    methoda(){
        console.log(`inside first method`);
    }

    methoda(n){
        this.n1 = n
        console.log(`inside the methoda argument ${this.n1}`);
    }

    methoda(n,m){
        this.n1 = n
        console.log(`inside the methoda argument ${this.n1} and ${m}`);
    }
}

const obj = new A()
obj.methoda()
obj.methoda(5,10)