document.addEventListener('DOMContentLoaded', function() {
            const dropdownToggle = document.querySelector('.dropdown-toggle');
            const dropdownContent = document.querySelector('.dropdown-content');
            
            function toggleDropdown() {
                dropdownContent.classList.toggle('show');
                dropdownToggle.classList.toggle('active');
            }
            
            dropdownToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggleDropdown();
            });
            
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.dropdown')) {
                    dropdownContent.classList.remove('show');
                    dropdownToggle.classList.remove('active');
                }
            });
            
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    dropdownContent.classList.remove('show');
                    dropdownToggle.classList.remove('active');
                }
            });
        });