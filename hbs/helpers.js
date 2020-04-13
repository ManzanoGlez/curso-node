const hbs = require("hbs");

hbs.registerHelper("current_year", () => {
    return new Date().getFullYear();
});


hbs.registerHelper("capitalize", (text) => {

    let words = text.split(" ");

    words.forEach((word, i) => {
        words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return words.join(" ");
});
