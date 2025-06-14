
        const characters = [
            {
                name: "Mario",
                type: "medium",
                image: "",
                stats: { speed: 70, acceleration: 60, handling: 50, traction: 60, turbo: 50 }
            },
            {
                name: "Yoshi",
                type: "light",
                image: "",
                stats: { speed: 60, acceleration: 80, handling: 70, traction: 70, turbo: 60 }
            },
            {
                name: "Bowser",
                type: "heavy",
                image: "",
                stats: { speed: 90, acceleration: 40, handling: 30, traction: 50, turbo: 40 }
            },
            {
                name: "Peach",
                type: "light",
                image: "",
                stats: { speed: 65, acceleration: 75, handling: 70, traction: 65, turbo: 60 }
            },
            {
                name: "Luigi",
                type: "medium",
                image: "",
                stats: { speed: 68, acceleration: 62, handling: 55, traction: 58, turbo: 52 }
            }
        ];
                
        const racersContainer = document.getElementById('racers');
        const searchInput = document.getElementById('search');
        const filterSelect = document.getElementById('filter');

        function renderCharacters() {
            const search = searchInput.value.toLowerCase();
            const filter = filterSelect.value;

            racersContainer.innerHTML = '';

            characters.filter(char => {
                return (char.name.toLowerCase().includes(search) &&
                    (filter === 'all' || char.type === filter));
            }).forEach(char => {
                const card = document.createElement('div');
                card.className = 'col-md-4';

                card.innerHTML = `
                    <div class="card p-3 h-100">
                        <img src="${char.image}" class="card-img-top" alt="${char.name}">
                        <div class="card-body">
                            <h5 class="card-title">${char.name}</h5>
                            <p>Type: ${char.type.charAt(0).toUpperCase() + char.type.slice(1)}</p>
                            <div>Speed: <div class="stat-bar"><div class="stat-fill" style="width: ${char.stats.speed}%"></div></div></div>
                            <div>Acceleration: <div class="stat-bar"><div class="stat-fill" style="width: ${char.stats.acceleration}%"></div></div></div>
                            <div>Handling: <div class="stat-bar"><div class="stat-fill" style="width: ${char.stats.handling}%"></div></div></div>
                            <div>Traction: <div class="stat-bar"><div class="stat-fill" style="width: ${char.stats.traction}%"></div></div></div>
                            <div>Mini-Turbo: <div class="stat-bar"><div class="stat-fill" style="width: ${char.stats.turbo}%"></div></div></div>
                        </div>
                    </div>
                `;

                racersContainer.appendChild(card);
            });
        }

        searchInput.addEventListener('input', renderCharacters);
        filterSelect.addEventListener('change', renderCharacters);

        renderCharacters();