document.addEventListener("deviceready", function() {
    const notificationForm = document.getElementById('notificationForm');
    
    notificationForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const message = document.getElementById('message').value;
      const timeInMinutes = parseInt(document.getElementById('time').value, 10);
  
      if (isNaN(timeInMinutes) || timeInMinutes <= 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor ingrese un tiempo válido en minutos.'
        });
        return;
      }
  
      const triggerTime = new Date(Date.now() + timeInMinutes * 60000);
  
      cordova.plugins.notification.local.schedule({
        title: 'Recordatorio de Turno Médico',
        text: message,
        trigger: { at: triggerTime },
        vibrate: true,
        foreground: true,
      });
  
      // Reemplaza alert() por SweetAlert
      Swal.fire({
        icon: 'success',
        title: '¡Notificación programada!',
        text: 'La notificación de recordatorio ha sido programada con éxito.',
        confirmButtonText: 'Aceptar'
      });
    });
  });
  