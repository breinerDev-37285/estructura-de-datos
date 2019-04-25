class Nodo{
    constructor(data,next){
        this.data = data
        this.next = next
    }
}

class Lista{
    constructor(){
        this.head = null
        this.size = 0
    }

    add(data){
        const nodo = new Nodo(data,null)
        if( this.head === null ){
            this.head = nodo
        }else{
            let current = this.head
            while( current.next !== null ){
                current = current.next
            }
            current.next = nodo
        }
        this.size++
    }

    insertAt(data,index){
        if( index < 0 || index > this.size ) return null;

        const nodo = new Nodo( data,null )
        let current = this.head
        let previus = null;

        if( index === 0 ){
            this.head = nodo
            nodo.next = current
        }else{
            for (let i = 0; i < index; i++) {
                previus = current
                current = current.next
            }
            nodo.next = current
            previus.next = nodo
        }
        
        this.size++
    }

    print(){

        let current = this.head 
        let res = '';
        while( current !== null ){
            res+= `[${current.data}] => `
            current = current.next
        }
        return res+='null';
    }

    remove( data ){

        let current = this.head
        let previus = null;

        while( current !== null ){

            if( current.data === data ){
                if( previus === null ){
                    this.head = current.next 
                }else{
                    previus.next = current.next
                }

                this.size--
                return current.data
            }

            previus = current
            current = current.next
        }
    }

    removeAt(index){
        
        if( index < 0 || index > this.size ) return null

        let current = this.head
        let previus = null;


        if( index === 0 ){
            this.head = current.next
        }else{
            for (let i = 0; i < index; i++) {
                previus = current
                current = current.next
            }
            previus.next = current.next
        }
        this.size--
        return current.data
    }

    getSize(){
        return this.size
    }

    isEmpty(){
        if( this.size === 0 ) return true
        return false
    }

}

const lista = new Lista()

lista.add(0)
lista.add(2)
lista.add(3)


lista.insertAt(1,1)

console.log( lista.removeAt(3) )

console.log( lista.print() )
