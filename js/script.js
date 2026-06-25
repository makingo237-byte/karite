document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       SYSTÈME DE FILTRAGE (Page Menu)
    ========================================= */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Désactiver le bouton précédent, activer le nouveau
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                menuCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        // Douce animation d'apparition
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 40);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    /* =========================================
       CONFIRMATION DE RÉSERVATION
    ========================================= */
    const form = document.getElementById('reservation-form');
    const popup = document.getElementById('popup-msg');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche la page de se recharger
            
            // Déclenche l'apparition de la popup
            popup.classList.add('show');
            
            // Réinitialise les champs du formulaire
            form.reset();

            // Disparition automatique après 4 secondes
            setTimeout(() => {
                popup.classList.remove('show');
            }, 4000);
        });
    }
});