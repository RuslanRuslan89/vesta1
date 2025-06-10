<!-- Добавь это в head -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script> 

<!-- В нужном месте body -->
<canvas id="colorPopularityChart" width="400" height="200"></canvas>

<script>
const ctx = document.getElementById('colorPopularityChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Черный', 'Блонд', 'Русый', 'Шатен', 'Рыжий'],
        datasets: [{
            label: 'Популярность оттенков',
            data: [35, 25, 20, 15, 5],
            backgroundColor: '#f4b183'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});
</script>
const ctx = document.getElementById('skillsChart').getContext('2d');
new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Окрашивание', 'Капсулирование', 'Стрижки'],
        datasets: [{
            label: 'Навыки',
            data: [95, 97, 93],
            backgroundColor: ['#f4b183', '#e09d70', '#d08a60']
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true
            }
        }
    }
});
