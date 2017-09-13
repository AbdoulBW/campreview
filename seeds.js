var mongoose = require("mongoose");
var Campground = require("./models/campground");
// var Comment = require("./models/comment");

var data = [
    {
        name:"Clouds rest",
        image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
        description:"s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        name:"Mount Mounty",
        image:"https://farm3.staticflickr.com/2562/3753652224_7ab88a28df.jpg",
        description:"as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes"
    },
    {
        name:"Hills Rest",
        image:"https://farm9.staticflickr.com/8306/7968778860_47d2a2f513.jpg",
        description:"as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes"
    }
]

function seedDB() {
    //remove all campgroundsfrom db
    Campground.remove({},function (err) {
        if(err){
            console.log(err)
        }
        console.log("removed campgrounds!");
        //Add few campgrounds
        data.forEach(function (item) {
            Campground.create(item, function (err, campground) {
                if (err) {
                    console.log(err)
                }else{
                    console.log("added 1 campground")
                    //add comments
                    Comment.create({
                        text:"This camp is great nut I wish it had internet",
                        author: "Your momma"
                    },function (err,comment) {
                        if (err) {
                            console.log(err)
                        } else{
                            campground.comments.push(comment)
                            campground.save();
                            console.log("created new comment")
                        }
                        
                    });
                }
            });
        });
    });  
    //add a few comments
}

module.exports = seedDB;