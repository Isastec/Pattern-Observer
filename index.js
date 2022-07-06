class Observable{
  
    constructor(dato){
        this.dato = dato
        this.lista = []
       
    }


     suscribe(observador){
        observador.mostrar(this.dato)
        this.lista.push(observador)

    }
    
    unsuscribe(observador){
        this.lista.filter(suscriptor => suscriptor !== observador)

    }

    notificacion(nuevoDato){
        this.lista.forEach(e => e.mostrar(nuevoDato))
    }
    

}



class Observador{
    constructor(etiqueta){
       this.etiqueta = etiqueta
    }

    mostrar(dato){
        this.etiqueta.textContent = dato
    }
   
}


const periodico = new Observable("¡Se Muere Santiago!")

const titulo = new Observador(h1Titulo)

const footTitulo = new Observador(footerTitulo)

periodico.suscribe(titulo)
periodico.suscribe(footTitulo)






    