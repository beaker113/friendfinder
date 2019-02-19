

var friends = [{
    name: "allen",
    photo: "http://demos.subinsb.com/isl-profile-pic/image/person.png",
    scores: [3, 2, 5, 4, 4, 1, 2, 2, 4, 5]
},
{
    name: "mr. thomson",
    photo: "https://static.boredpanda.com/blog/wp-content/uploads/2016/02/japanese-grumpy-cat-angry-koyuki-moflicious-22.jpg",
    scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},

{
    name: "trish",
    photo: "https://cdn.pixabay.com/photo/2018/04/20/17/18/cat-3336579__340.jpg",
    scores: [2, 4, 3, 2, 2, 3, 2, 5, 3, 1]
},

{
    name: "pringles",
    photo: "https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/munchkinhed.png?itok=oeH4evcQ&resize=1100x1100",
    scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
},

{
    name: "peanut",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTopcG9aTZvFE1qaT02DsoYj4Ch2zabw7uAL6hvNG2HA9oDCH7x",
    scores: [2, 4, 3, 2, 1, 3, 2, 3, 2, 2]
},

{
    name: "butter cup",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4F-qfkPx0WrWyBnNt-gIXlR1M0ynhWmVsVT8y0qCQ5zJ9_fRW",
    scores: [5, 3, 2, 1, 2, 5, 4, 3, 2, 3]
},

{
    name: "jake",
    photo: "https://cat-bounce.com/catbounce.png",
    scores: [3, 5, 2, 1, 2, 1, 3, 4, 2, 1]
},

{
    name: "hemmingway",
    photo: "https://www.catster.com/wp-content/uploads/2017/08/Hairless-cat.jpg",
    scores: [3, 2, 5, 4, 5, 3, 2, 3, 3, 1]
},

{
    name: "leo",
    photo: "https://i.kym-cdn.com/entries/icons/original/000/002/232/bullet_cat.jpg",
    scores: [5, 4, 3, 2, 3, 2, 1, 3, 2, 1]
},

{
    name: "snuggles",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu_tIfOlHoq3_A60curgxLzwIkcOWyK8uLa4R0rBwbDNfvkyFzQ",
    scores: [5, 5, 3, 2, 2, 3, 1, 4, 3, 1]
},

{
    name: "richard",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sg_Zy3KvCPLENEg6B5tsRS3K5vgPAM56V1tqZg5QdnNdEkpq4g",
    scores: [3, 4, 3, 3, 3, 3, 3, 3, 3, 3]
},

{
    name: "thomas",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSIyFKG6jm6hqlMIAXtguMNuCXWKqR2kjm83xDzEgzcia0yfpdA",
    scores: [2, 3, 1, 4, 3, 2, 3, 2, , 3, 3]
},

{
    name: "twinkie",
    photo: "https://i.ytimg.com/vi/5dsGWM5XGdg/hqdefault.jpg",
    scores: [1, 2, 1, 3, 2, 3, 2, 3, 1, 1]
},

{
    name: "Archie",
    photo: "https://peopledotcom.files.wordpress.com/2018/04/zappa-the-cat-6.jpg",
    scores: [2, 3, 1, 2, 1, 4, 3, 2, 2, 4]
},

{
    name: "Dum dum",
    photo: "https://images.pexels.com/photos/326875/pexels-photo-326875.jpeg?cs=srgb&dl=adorable-animal-blur-326875.jpg&fm=jpg",
    scores: [3, 2, 5, 4, 3, 5, 3, 2, 3, 2]
},

{
    name: "cat",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWB6W7GLsVLLDYp72NtIGnB4r1aJVpVnOed17IB2abKLY_8tAl",
    scores: [5, 3, 2, 3, 2, 3, 2, 3, 1, 2]
},

{
    name: "chin",
    photo: "https://s.hswstatic.com/gif/whiskers-sam.jpg",
    scores: [5, 2, 3, 4, 2, 3, 1, 3, 4, 3]
}]

var waitlist = [];



var checkWhen = function () {
    var a1 = $("input[name='Check1']:checked").val();
    var a2 = $("input[name='Check2']:checked").val();
    var a3 = $("input[name='Check3']:checked").val();
    var a4 = $("input[name='Check4']:checked").val();
    var a5 = $("input[name='Check5']:checked").val();
    var a6 = $("input[name='Check6']:checked").val();
    var a7 = $("input[name='Check7']:checked").val();
    var a8 = $("input[name='Check8']:checked").val();
    var a9 = $("input[name='Check9']:checked").val();
    var a10 = $("input[name='Check10']:checked").val();

    var userChoice = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10]
    Math.abs(userChoice - friends[i].scores) = result;
    var result = [];
    console.log(userChoice)
    console.log(result)
};

$("#submit").on("click", function () {

    checkWhen();
});


module.exports = friends