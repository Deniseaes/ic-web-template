
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CÁLCULO DE DATOS (Se hace una sola vez) ---
    const currentPath = window.location.pathname;
    const isSpanish = /\/ES(\/|$)/i.test(currentPath); // Detecta /es/ o /ES/

    let targetUrl = '';
    let targetText = '';

    if (isSpanish) {
        // --- Estamos en ESPAÑOL, queremos ir a INGLÉS ---
        targetText = 'ENG';
        targetUrl = currentPath.replace(/\/ES/i, '');
        if (targetUrl === '') targetUrl = '/'; // Corrección para la raíz

    } else {
        // --- Estamos en INGLÉS, queremos ir a ESPAÑOL ---
        targetText = 'ESP';
        
        if (currentPath === '/') {
            targetUrl = '/ES/';
        } else {
            const lastSlashIndex = currentPath.lastIndexOf('/');
            const pathPrefix = currentPath.substring(0, lastSlashIndex); 
            const fileName = currentPath.substring(lastSlashIndex);     
            targetUrl = pathPrefix + '/ES' + fileName;
        }
    }

    // --- 2. BUSCAR TODOS LOS CONTENEDORES ---
    // En lugar de querySelector, usamos querySelectorAll
    const containers = document.querySelectorAll('.language-select-container');

    if (containers.length === 0) {
        console.warn('No se encontró ningún .language-select-container');
        return;
    }

    // --- 3. RECORRER CADA CONTENEDOR Y CREAR SU BOTÓN ---
    // Iteramos sobre la lista de contenedores (el del header y el del off-canvas)
    containers.forEach(container => {
        
        // Creamos un botón NUEVO para cada contenedor
        const linkButton = document.createElement('a');
        linkButton.href = targetUrl;
        linkButton.textContent = targetText;
        linkButton.className = 'language-switch-button'; // La misma clase para ambos

        // Limpiamos el contenedor específico y le añadimos su botón
        container.innerHTML = ''; 
        container.appendChild(linkButton);
    });
});
/*

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. IDENTIFICAR LOS ELEMENTOS ORIGINALES ---
    const originalSelect = document.getElementById('language-select');
    const optionEN = originalSelect.querySelector('option[value="EN"]');
    const optionES = originalSelect.querySelector('option[value="ES"]');

    const path = window.location.pathname;
    
    // --- 2. DETECCIÓN DE IDIOMA (Tu lógica que ya funciona) ---
    // Usamos /i para que no importe si es /es o /ES
    const isSpanish = /\/ES(\/|$)/i.test(path); 
    
    console.log("URL Path detectado:", path);
    console.log("¿Es español? (true/false):", isSpanish);

    // --- 3. ACTUALIZAR EL <SELECT> ORIGINAL ---
    // NO tocamos "nice-select". Solo el select original.
    if (originalSelect && optionEN && optionES) {
        if (isSpanish) {
            // Le decimos al <select> original que 'ES' es el valor
            originalSelect.value = 'ES';
            // Por si acaso, forzamos la propiedad 'selected'
            optionEN.selected = false;
            optionES.selected = true;
        } else {
            // Le decimos al <select> original que 'EN' es el valor
            originalSelect.value = 'EN';
            optionEN.selected = true;
            optionES.selected = false;
        }
    }
    
    // Cuando la librería "nice-select" se ejecute (antes o después de esto),
    // leerá el <select> original y verá que 'ES' está seleccionado,
    // por lo tanto, se dibujará mostrando 'ESP' desde el inicio.

    
    // --- 4. ASIGNAR EVENTOS DE CLIC (Tu código de switchLang) ---
    // Esta parte SÍ necesita esperar a que nice-select se cree.
    // Usamos un pequeño retraso (setTimeout) para asegurar que los elementos
    // .nice-select .list .option ya existen antes de asignarles el 'click'.
    
    // Esta función de espera es la clave
    function bindNiceSelectClicks() {
        const niceSelectOptions = document.querySelectorAll('.nice-select .list .option');

        if (niceSelectOptions.length > 0) {
            // ¡Los encontramos! Asignamos los clics.
            niceSelectOptions.forEach(option => {
                option.addEventListener('click', () => {
                    const selectedLang = option.getAttribute('data-value');
                    switchLang(selectedLang);
                });
            });
        } else {
            // Aún no existen, volvemos a intentar en 100ms
            setTimeout(bindNiceSelectClicks, 100);
        }
    }
    
    // Empezamos a buscar los botones
    bindNiceSelectClicks();


    // --- 5. FUNCIÓN switchLang (Esta no cambia) ---
    // Esta se ejecuta DESPUÉS de un clic, para entonces todo existe.
    function switchLang(lang) {
        const currentPath = window.location.pathname;
        const isSpanish = /\/ES(\/|$)/i.test(currentPath);
        let newUrl = currentPath;

        if (lang === 'ES' && !isSpanish) {
            // --- Queremos ir a ESPAÑOL ---
            if (currentPath === '/') {
                newUrl = '/ES/';
            } else {
                const lastSlashIndex = currentPath.lastIndexOf('/');
                const pathPrefix = currentPath.substring(0, lastSlashIndex); 
                const fileName = currentPath.substring(lastSlashIndex);     
                newUrl = pathPrefix + '/ES' + fileName;
            }

        } else if (lang === 'EN' && isSpanish) {
            // --- Queremos ir a INGLÉS ---
            newUrl = currentPath.replace(/\/ES/i, '');
        }

        if (newUrl !== currentPath && newUrl !== '') {
            window.location.pathname = newUrl;
        }
    }
});

*/
  
  /*
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
                    newUrl = url.replace(/\/EN\/?$/i, 'ES');
                } else if (!endsWithES) {
                    newUrl = url.replace(/\/$/, '') + 'ES';
                }
            } else if (lang === 'EN') {
                if (endsWithES) {
                    newUrl = url.replace(/\/ES\/?$/i, 'EN');
                } else if (!endsWithEN) {
                    newUrl = url.replace(/\/$/, '') + 'EN';
                }
            }

            if (newUrl !== url) {
                window.location.pathname = newUrl;
            }
        }
    });
*/