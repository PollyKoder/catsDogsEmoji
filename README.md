# Task one:
 - Render a list of cat emojis in an unordered list when a button is clicked.
 - Use the provided object, emojis, which contains an array of cat emojis.
    javascriptCopy code

const emojis = {
catEmojis: ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🐱"],
dogEmojis: ["🐶", "🐕", "🦮", "🐩", "🐾", "🐺", "🦊", "🦝", "🐕‍🦺", "🐩‍🦱"],
};


 - Style the lists using CSS and ensure they are responsive to different screen sizes.
    Implement CSS styles to format the unordered list generated in Task 1. Ensure that the layout looks good on various screen sizes.


# My notes(notes inside parentheses are in Norwegian):
- Made basic html and css, added an id to the button element so I could fetch it in js. Then I created a new element/action in js and pushed/generated it into the html element.
(- La opp basic html og css, ga så id til button som jeg brukte til å hente html elementet inn i js. Deretter generete jeg nytt element/handling med hjelp av(koblet til) onclick i html button.)
- Came across a problem where the emoji's was stuck on the page in browser/view-port, managed to fix it when I realized that I didn't need to call the "renderListCat()" after the function in JS.
(- Slet litt med at emoji'ene var fast i nettleseren/view-port, men fikk fikset det da jeg innså at jeg ikke trengte "renderListCat"-call under function i js.)
- Feel like I don't really know what I'm doing...
(-Føler ikke at jeg forstår helt hva jeg gjør...)
- Got the button to work so that the cat-emojis show when one presses the button.
(- Har fått knappen til å virke slik at cat-emoji'ene vises når man trykker på knappen.)
- Want to spend more time to get the css better, so that the page will look more proper, even though it looks a bit empty, but I don't have many ideas at the moment.
(- Ønsker å bruke litt mer tid på css, slik at det ser bedre ut, selv om siden ser litt tom ut nå, men har ikke så mye ideer for øyeblikket.)
- Also need to get the page to be responsive to different screen-sizes.
(- Må også få alt til å være responsivt til flere skjermstørrelser.)
- Add class/id to ul, so it can be styled with css!
(- Legg til class/id, så elementet kan styles med css!)

- Came across a new problem now; the button dissapears from the browser/view-port, it shows up again if I close the window and open the view-port again, but I don't get why it dissapeared to begin with...
(- Kommet over et nytt problem hvor knappen forsvinner fra siden/port-view, den dukker opp igjen hvis jeg åpner vinduet/porten på nytt, men forstår ikke hvorfor den forsvinner i utgangspunktet...)
- Tried to add the function where it adds an emoji to the clip-board when it's clicked, but the code broke.
(- Prøvde å få til function hvor emoji'en blir lagt til clip-board når man trykker på den, men da knakk koden.)
- Decided to put the <ul> element in a <div> so I could make a flex-box, both for the purpose of making css design easier when adding the dog-emojis and to see if I can use it as a max-width in the hopes that it will stack the emojis instead of making the web-page strech for each row of emojis.
(- Bestemte meg for å putte <ul> i en <div> for å lage en flex-box, både for å forenkle css design når jeg legger til dig-emoji'ene og foå se om jeg kan bruke max-width slik at emojiene samples penere enn at selve siden bare strekker seg for hver rad med emoji'er.)