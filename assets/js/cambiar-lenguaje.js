
    document.addEventListener('DOMContentLoaded', () => {
        const originalSelect = document.getElementById('language-select');
        const path = window.location.pathname;

        if (originalSelect) {
            const niceSelectCurrent = document.querySelector('.nice-select .current');

            // --- NUEVO: GESTIONAR LA CLASE 'selected' EN LA LISTA ---
            // Buscamos ambas opciones <li> de la lista desplegable
            const optionEN = document.querySelector('.nice-select .list .option[data-value="EN"]');
            const optionES = document.querySelector('.nice-select .list .option[data-value="ES"]');

            if (/\/ES\/?$/.test(path)) {
                // 1. Actualizar valor del <select> y texto visible
                originalSelect.value = 'ES';
                if (niceSelectCurrent) niceSelectCurrent.textContent = 'ESP';

                // 2. Actualizar el resaltado en la lista
                if (optionEN && optionES) {
                    optionEN.classList.remove('selected'); // Quitar de ENG
                    optionES.classList.add('selected');    // Poner en ESP
                }

            } else {
                // 1. Actualizar valor del <select> y texto visible
                originalSelect.value = 'EN';
                if (niceSelectCurrent) niceSelectCurrent.textContent = 'ENG';

                // 2. Actualizar el resaltado en la lista
                if (optionEN && optionES) {
                    optionES.classList.remove('selected'); // Quitar de ESP
                    optionEN.classList.add('selected');    // Poner en ENG
                }
            }
        }
        
        // --- CÓDIGO PARA FUNCIONAR CON NICE-SELECT (sin cambios) ---
        const niceSelectOptions = document.querySelectorAll('.nice-select .list .option');

        niceSelectOptions.forEach(option => {
            option.addEventListener('click', () => {
                const selectedLang = option.getAttribute('data-value');
                switchLang(selectedLang);
            });
        });

        function switchLang(lang) {
            // ... (El resto de tu función switchLang se mantiene igual) ...
            const url = window.location.pathname;
            let newUrl = url;
            const endsWithEN = /\/EN\/?$/i.test(url);
            const endsWithES = /\/ES\/?$/i.test(url);

            if (lang === 'ES') {
                if (endsWithEN) {
                    newUrl = url.replace(/\/EN\/?$/i, '/ES');
                } else if (!endsWithES) {
                    newUrl = url.replace(/\/$/, '') + '/ES';
                }
            } else if (lang === 'EN') {
                if (endsWithES) {
                    newUrl = url.replace(/\/ES\/?$/i, '/EN');
                } else if (!endsWithEN) {
                    newUrl = url.replace(/\/$/, '') + '/EN';
                }
            }

            if (newUrl !== url) {
                window.location.pathname = newUrl;
            }
        }
    });
