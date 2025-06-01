function toggleDarkMode() {
            if (document.body.classList.contains('dark-mode')){
                document.getElementById("switch").textContent="Toggle Dark Mode";
            }
            else{
                document.getElementById("switch").textContent="Toggle Light Mode";
            }
            document.body.classList.toggle("dark-mode");
        }

        function rickroll(){
            event.preventDefault(); // Empêche la soumission du formulaire
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
        }