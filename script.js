document.addEventListener('DOMContentLoaded', function () {
    const downloadBtn = document.getElementById('downloadBtn');
    const features = document.querySelectorAll('.feature');
    const steps = document.querySelectorAll('.step');

    const observerOptions = { threshold: 0.2 };

    const fadeObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    features.forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        fadeObserver.observe(el);
    });

    steps.forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateX(20px)';
        el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        fadeObserver.observe(el);
    });

    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            var self = this;
            setTimeout(function () {
                self.style.transform = 'scale(1)';
            }, 150);
        });
    }
});
