function fetchAndDisplay() {
    const url = document.getElementById('urlInput').value;

    // Проверка наличия URL
    if (!url) {
        alert('Введите URL страницы');
        return;
    }

    // Очистка результата
    document.getElementById('result').innerHTML = 'Загрузка...';

    // Запрос к странице с помощью fetch
    fetch(url)
        .then(response => response.text())
        .then(data => {
            // Создание виртуального элемента для парсинга HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');

            // Вывод всего содержимого страницы
            document.getElementById('result').innerHTML = doc.documentElement.outerHTML;

        })
        .catch(error => {
            // Обработка ошибок
            console.error('Ошибка при запросе страницы:', error);
            document.getElementById('result').innerHTML = '<p>Ошибка при запросе страницы</p>';
        });
}
