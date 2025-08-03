    window.addEventListener("DOMContentLoaded", () => {
      const splash = document.getElementById('splash');
      const splashText = document.getElementById('splash-text');
    
      const messages = [
        "Hello",
        "Bonjour",
        "Ciao",
        "こんにちは",
        "안녕하세요",
      ];
    
      let index = 0;
    
      function showNextMessage() {
        // Fade out quickly
        splashText.style.opacity = 0;
    
        setTimeout(() => {
          // Update text
          splashText.textContent = messages[index];
          // Fade in quickly
          splashText.style.opacity = 1;
    
          index++;
    
          if (index < messages.length) {
            // Show this word briefly before fading out again
            setTimeout(showNextMessage, 500);
          } else {
            // After last message, wait 1s before hiding splash
            setTimeout(() => {
              splash.classList.add('hidden');
            }, 900);
          }
        }, 200); // fade out duration
      }
    
      // Start the cycle
      splashText.textContent = messages[0];
      splashText.style.opacity = 1;
      index = 1;
    
      // Schedule next fade out
      setTimeout(showNextMessage, 500);
    });

    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const offsetX = ((e.clientX - rect.left) / rect.width - 0.5) * 10; // range -5 to +5
        const offsetY = ((e.clientY - rect.top) / rect.height - 0.5) * 10; // range -5 to +5
        card.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translate(0, 0)';
      });
    });
