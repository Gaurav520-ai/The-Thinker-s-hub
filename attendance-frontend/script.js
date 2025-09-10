// Simple login demo (no backend yet)
document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    // For demo, just redirect to dashboard page based on role
    if (role === 'student') {
        window.location.href = 'student-dashboard.html';
    } else if (role === 'faculty') {
        window.location.href = 'faculty-dashboard.html';
    } else {
        window.location.href = 'admin-dashboard.html';
    }
};
