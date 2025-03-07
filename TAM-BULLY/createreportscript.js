document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show a confirmation pop-up
    Swal.fire({
        title: "Report Submitted!",
        text: "Your report has been successfully created and recorded.",
        icon: "success",
        confirmButtonText: "OK"
    });

    this.reset();
});
