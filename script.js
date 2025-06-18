document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reservationForm");
    const confirmation = document.getElementById("confirmation");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent real submission
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const date = form.date.value;
      const time = form.time.value;
  
      if (name && email && date && time) {
        confirmation.textContent = `Thank you, ${name}! Your reservation for ${date} at ${time} has been submitted.`;
        form.reset();
      } else {
        confirmation.textContent = "Please fill in all fields.";
      }
    });
  });
  