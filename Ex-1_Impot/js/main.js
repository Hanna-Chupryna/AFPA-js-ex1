// Получаем элементы формы и результата
const form = document.getElementById('taxForm');
const result = document.getElementById('result');

// Добавляем обработчик события отправки формы
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Останавливаем перезагрузку страницы

    // Получаем введенные данные
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;

    // Проверяем условия налогообложения
    let taxable = false;

    if (gender === 'male' && age > 20) {
        taxable = true; // Мужчины старше 20 лет платят налог
    } else if (gender === 'female' && age >= 18 && age <= 35) {
        taxable = true; // Женщины в возрасте от 18 до 35 лет платят налог
    }

    // Отображаем результат
    if (taxable) {

        Swal.fire("Vous payez des impôts!");
        // result.textContent = "Vous payez des impôts!";
        // result.className = "text-success";
    } else {
        Swal.fire("Vous ne payez pas d'impôts!");
        // result.textContent = "Vous ne payez pas d'impôts!";
        // result.className = "text-danger";
    }
});