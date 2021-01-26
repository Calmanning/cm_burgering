$(function() {
    $(".change-eaten").on("click", function(event) {
        event.preventDefault()
        const id = $(this).data("id");
        const newEat = $(this).data("neweat");
        console.log("burger, line 4 consolelog NewEat:" + newEat)
        const newEatenState = {
            eaten: newEat
        };

        //making a put request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(function() {
                console.log("Omnomnom", newEat);
                location.reload()
                // we're relaoding the page so we can reload the list
            }
        );
    });

    $(".create-form").on("submit", function(event){ 
        event.preventDefault();
        //this is submit within a form. Need to prevent the default behavior.

        const newBurger = {
            name: $("#burg").val().trim(),
            eaten: $("[name=eaten]:checked").val().trim()
        };

        //sending a POST with that sweet burger info
        $.ajax("/api/burgers", {
            type: "POST",
            data:newBurger
        }).then(
            function(){
                console.log("cooked up a new brugger");
                location.reload();
            }
        );
    });

    //time to delete burgs
    $(".delete-burg").on("click", function(event) {
        console.log("deleted?")
        const id = $(this).data("id");

        //and the request to delete it
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function() {
            console.log("byebye burger. Burg Deleted", id);
            //update
            location.reload();
        
        })


    })

    
})

