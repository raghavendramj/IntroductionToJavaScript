const movie = {
    title:"",
    director: "",
    set : function(title, director){
              this.title = title;
              this.director = director;
          },
    get: function(){
            print = () => {
                console.log("Title : ", this.title, " and Director is : ", this.director);
            }
            print();
        }
}

movie.set("Inception", "Christopher Nolan");
movie.get();


const movie = {
    set : function(title, director){
              this.title = title;
              this.director = director;
          },
    get: function(){
            print = () => {
                console.log("Title : ", this.title, " and Director is : ", this.director);
            }
            print();
        }
}

movie.set("Inception", "Christopher Nolan");
movie.get();