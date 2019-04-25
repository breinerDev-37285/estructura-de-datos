class Pila{

    constructor(){

        this.items = {}
        this.front = 0
        this.end = 0
    }


    llenar(data){
        this.items[ this.end ] = data
        this.end++
    }

    quitar(){
        if( this.front === this.end ){
            return null
        }else{
            let data = this.items[ this.end-1 ]
            delete this.items[ this.end-1 ]
            this.end--
            return data
        }

    }

    getSize(){
        return this.end - this.front
    }

    isEmpty(){
        if( this.getSize() === 0 ){
            return true
        }else{
            return false
        }
    }

    peek(){
        return this.items[ this.end-1 ]
    }


    print(){
        if( this.front === this.end ){
            return null
        }else{
            let res = '';
            for (let i = this.end-1; i >= this.front; i--) {
                res += `[${this.items[i]}] `
            }
            return res;
        }
    }
}

const pila = new Pila()


pila.llenar(1)
pila.llenar(2)
pila.llenar(3)
pila.llenar(4)
pila.llenar(5)


console.log( pila.print() )

console.log( pila.quitar() )
console.log( pila.quitar() )

console.log( pila.peek() )

console.log( pila.print() )

console.log( pila.isEmpty() )
console.log( pila.getSize() )