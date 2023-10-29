# Braille Encoder

## Python main.py
```py
from main import BrailleText

text = 'your braille text'
print(text)
bt = BrailleText(text)
print(bt.encode())
```

## Javascript main.js

```javascript
const text = "Hello, I'm ScpBill #1"
const res = Braille.decode(text, /*optional:*/ 'en', /*optional:*/ {
    autocorrect: true,
    shorten_syllables: true,
    shorten_words: true,
    advanced: false
})
console.log(res === '⠠⠓⠑⠇⠇⠕⠂⠀ ⠠⠊⠄⠍ ⠠⠎⠉⠏⠠⠃⠊⠇⠇ ⠀⠼⠁⠰'); // Output: true
const res2 = Braille.encode(res);
console.log(res2 === "Hell, I'm ScpBill #1"); // Output: true
```
