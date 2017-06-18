var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");


var data = [
  {
    name: "Cloud's Rest",
    image: "https://s3-us-west-2.amazonaws.com/hispotion-prod/wp-content/uploads/2017/05/31-05101657f53d1a399b7051016886742565-31.jpg",
    description: "Bacon ipsum dolor amet ground round kielbasa pork chop, pastrami shankle doner brisket drumstick. Shank prosciutto pork chop ham, sirloin landjaeger ball tip rump boudin jerky ribeye beef ribs cupim. Frankfurter spare ribs bresaola tri-tip short loin boudin turducken meatloaf rump hamburger tenderloin shankle ham hock. Jerky porchetta corned beef shankle prosciutto frankfurter ball tip fatback short loin tail. Shank tenderloin ribeye pork chop hamburger."
  },
  {
    name: "Lakey Mc Lake Face",
    image: "https://www.southwestlakes.co.uk/wp-content/uploads/2015/12/siblyback-lkae-bodmin-camping-cornwall-campsites.jpg",
    description: "Bacon ipsum dolor amet ground round kielbasa pork chop, pastrami shankle doner brisket drumstick. Shank prosciutto pork chop ham, sirloin landjaeger ball tip rump boudin jerky ribeye beef ribs cupim. Frankfurter spare ribs bresaola tri-tip short loin boudin turducken meatloaf rump hamburger tenderloin shankle ham hock. Jerky porchetta corned beef shankle prosciutto frankfurter ball tip fatback short loin tail. Shank tenderloin ribeye pork chop hamburger."
  },
  {
    name: "Knobby's Knurl",
    image: "http://www.visitnc.com/contents/imgcrop/60726/1200/630/preview",
    description: "Bacon ipsum dolor amet ground round kielbasa pork chop, pastrami shankle doner brisket drumstick. Shank prosciutto pork chop ham, sirloin landjaeger ball tip rump boudin jerky ribeye beef ribs cupim. Frankfurter spare ribs bresaola tri-tip short loin boudin turducken meatloaf rump hamburger tenderloin shankle ham hock. Jerky porchetta corned beef shankle prosciutto frankfurter ball tip fatback short loin tail. Shank tenderloin ribeye pork chop hamburger."
  }
]


function seedDB(){
  // Remove All Campgrounds
  Campground.remove({},function(err){
    if (err){
      console.log(err);
    }
    console.log("Removed Campgrounds!!");
    // Add a few Campgrounds
    data.forEach(function(seed){
      Campground.create(seed, function(err,campground){
        if (err) {
          console.log(err);
        }
        else {
          console.log("Added a Campground!!");
          // Add q comment to Campground
          Comment.create(
            {
              text: "This place is awesome, but the wi-fi sucks balls!!",
              author: "Homer"
            }, function(err, comment){
                if (err){
                  console.log(err);
                } else{
                  campground.comments.push(comment);
                  campground.save();
                  console.log("Created new Comment!!");
                }
            });
        }
      });
    });
  });
};

module.exports = seedDB;
