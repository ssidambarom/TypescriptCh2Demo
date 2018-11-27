class PersonnageJs {
    private name:string;

    constructor() {
    }

    public uncorrectJSGreeting(name: string) {
        this.name = name;
        setInterval(function(){
            console.log("Hi, " + this.name);//contexte de la méthode setInterval où name n'existe pas!!
        },1000)
    }
    
    public correctJSGreeting(name: string) {
        let self = this;// on capture this (contexte de la classe personnge) où name existe
        self.name = name;
        setInterval(function(){
            console.log("Hi, " + self.name);
        },1000)
    }

    
    public greeting(name: string) {
        this.name = name;
        setInterval(()=>{
            console.log("Hi, " + this.name);
        },1000)
    }
};


