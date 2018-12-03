class PersonnageJs {
    private name:string;

    constructor() {
    }

    public uncorrectJSGreeting(name: string) {
        this.name = name;
        setInterval(function(){
            console.log("Hi, " + this.name,"Without this capture.");//contexte de la méthode setInterval où name n'existe pas!!
        },1000)
    }
    
    public correctJSGreeting(name: string) {
        let self = this;// on capture this (contexte de la classe personnge) où name existe
        self.name = name;
        setInterval(function(){
            console.log("Hi, " + self.name,"With this capture.");
        },1000)
    }

    
    public greeting(name: string) {
        this.name = name;
        setInterval(()=>{
            console.log("Hi, " + this.name,"With arrow function.");
        },1000)
    }
};


let perso = new PersonnageJs();

perso.uncorrectJSGreeting("Sylvain"); //Hi,  Without this capture.
perso.correctJSGreeting("Sylvain");// Hi, Sylvain With this capture.
perso.greeting("Sylvain");// Hi, Sylvain With  arrow function.


