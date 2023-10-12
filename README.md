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


# My notes:
- La opp basic html og css, ga så id til button som jeg brukte til å hente html elementet inn i js. Deretter generete jeg nytt element/handling med hjelp av(koblet til) onclick i html button.
- Slet litt med at emoji'ene var fast i nettleseren/viewport, men fikk fikset det da jeg innså at jeg ikke trengte "renderListCat"-call under function i js.
-Føler ikke at jeg forstår helt hva jeg gjør...
- Har fått knappen til å virke slik at cat-emoji'ene vises når man trykker på knappen.
- Ønsker å bruke litt mer tid på css, slik at det ser bedre ut, men har ikke så mye ideer for øyeblikket.
- Må også få alt til å være responsivt til flere skjermstørrelser.
- 