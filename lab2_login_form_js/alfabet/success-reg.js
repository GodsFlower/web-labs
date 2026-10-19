import library from "./alfabet.js";

class SuccessReg {
    constructor() {
        this.popup = document.querySelector('.pop-up');
        this.closeButton = document.querySelector('.close-button'); // X
        this.close = document.querySelector('.close');               // button Close
        this.userName = document.querySelector('.user-name');        // field name
        this.letters = document.querySelector('.letters');
        this.info = document.querySelector('.info');
        this.openClose(true);

        this.closeButton.addEventListener('click', () => this.openClose(true));
        this.close.addEventListener('click', () => this.openClose(true));
    }

    // true — сховати pop-up, false — показати
    openClose(hide) {
        this.popup.classList.toggle('hidden', hide);
    }

    // Визначає, до якого алфавіту належить літера
    findLanguage(letter) {
        for (const key in library) {
            if (library[key].alphabet.includes(letter.toLowerCase())) {
                return library[key].name;
            }
        }
        return null;
    }

    // Перебирає кожну літеру імені та виводить її окремо
    writeName() {
        const name = this.userName.value.trim();
        this.letters.innerHTML = '';
        let unknown = 0;

        for (let i = 0; i < name.length; i++) {
            const letter = name[i];
            const span = document.createElement('span');
            span.className = 'letter';
            span.textContent = letter;
            span.style.animationDelay = `${i * 0.15}s`;
            span.style.opacity = 0;

            const lang = this.findLanguage(letter);
            if (!lang) {
                span.classList.add('unknown');
                unknown++;
            }
            span.title = lang ?? 'невідомий символ';

            this.letters.append(span);
            console.log(`Літера ${i + 1}: ${letter} (${span.title})`);
        }

        this.info.textContent = `Кількість літер: ${name.length}` +
            (unknown ? `, невідомих символів: ${unknown}` : '');

        this.openClose(false);
    }
}

export default SuccessReg;
