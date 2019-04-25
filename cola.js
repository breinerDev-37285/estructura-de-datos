class Cola{

    constructor(){
        this.items = {}
        this.front = 0
        this.end = 0
    }

    push(data){
        this.items[ this.end ] = data
        this.end++
    }

    pop(){
        if( this.front === this.end ){
            return null
        }else{
            let data = this.items[ this.front ]
            delete this.items[ this.front ]
            this.front++
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
        if( this.isEmpty() === true ){
            return null
        }else{
            return this.items[ this.front ]
        }
    }   

    print(){
        if( this.front === this.end ){
            return null
        }else{
            let data = ''
            for (let i = this.end-1; i >= this.front; i--) {
               data += `[${this.items[i]}] `
            }
            return data
        }
    }

}

const cola = new Cola()

cola.push(1)
cola.push(2)
cola.push(3)
cola.push(4)
cola.push(5)


console.log(cola.print())

console.log( cola.pop() )
console.log( cola.pop() )
console.log( cola.pop() )
console.log( cola.pop() )

console.log(cola.print())

console.log( cola.peek() )

console.log( cola.isEmpty() )