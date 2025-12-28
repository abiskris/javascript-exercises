const getTheTitles = function(books) {

    let titles = [];

    for(book of books){
        titles.push(book["title"]);
    }

    return titles;

};

module.exports = getTheTitles;