// For large search input
searchInput.addEventListener('focus', () => {
  searchWrapper.classList.add('w-32', 'lg:w-64');
  searchInput.classList.remove('bg-[#f5f1e9]', 'border-[#8b5e3c]');
  searchInput.classList.add('bg-white', 'border-[#c99a6b]');
  searchIcon.classList.remove('text-[#8b5e3c]');
  searchIcon.classList.add('text-[#c99a6b]');
});

searchInput.addEventListener('blur', () => {
  searchWrapper.classList.remove('w-32', 'lg:w-64');
  searchWrapper.classList.add('w-20', 'sm:w-24', 'lg:w-48');
  searchInput.classList.remove('bg-white', 'border-[#c99a6b]');
  searchInput.classList.add('bg-[#f5f1e9]', 'border-[#8b5e3c]');
  searchIcon.classList.remove('text-[#c99a6b]');
  searchIcon.classList.add('text-[#8b5e3c]');
});

// For small search input
searchInputSmall.addEventListener('focus', () => {
  searchWrapperSmall.classList.remove('w-20', 'sm:w-24', 'lg:w-32');
  searchWrapperSmall.classList.add('w-32', 'lg:w-48');
  searchInputSmall.classList.remove('bg-[#f5f1e9]', 'border-[#8b5e3c]');
  searchInputSmall.classList.add('bg-white', 'border-[#c99a6b]');
  searchIconSmall.classList.remove('text-[#8b5e3c]');
  searchIconSmall.classList.add('text-[#c99a6b]');
});

searchInputSmall.addEventListener('blur', () => {
  searchWrapperSmall.classList.remove('w-32', 'lg:w-48');
  searchWrapperSmall.classList.add('w-20', 'sm:w-24', 'lg:w-32');
  searchInputSmall.classList.remove('bg-white', 'border-[#c99a6b]');
  searchInputSmall.classList.add('bg-[#f5f1e9]', 'border-[#8b5e3c]');
  searchIconSmall.classList.remove('text-[#c99a6b]');
  searchIconSmall.classList.add('text-[#8b5e3c]');
});

// <!-- Js for menu -->

  const toggleBtn = document.getElementById('menuToggle');
  const dropdown = document.getElementById('mobileMenu');

  let isOpen = false;

  toggleBtn.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
      dropdown.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
      dropdown.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
    } else {
      dropdown.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
      dropdown.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
      dropdown.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
      isOpen = false;
    }
  });




  // Js for carrosel

   
        let currentIndex = 0;
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;
        const container = document.querySelector('.carousel-container');

        function showSlide(index) {
            items.forEach((item, i) => {
                item.classList.add('hidden');
                if (i === index) {
                    item.classList.remove('hidden');
                    if (index > currentIndex) {
                        item.classList.add('slide-left');
                    } else if (index < currentIndex) {
                        item.classList.add('slide-right');
                    }
                    setTimeout(() => {
                        item.classList.remove('slide-left', 'slide-right');
                    }, 50);
                }
            });
            currentIndex = index;
        }

        document.querySelector('.nav-button.next').addEventListener('click', () => {
            const nextIndex = (currentIndex + 1) % totalItems;
            showSlide(nextIndex);
        });

        document.querySelector('.nav-button.prev').addEventListener('click', () => {
            const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
            showSlide(prevIndex);
        });

        // Initialize with first slide
        showSlide(currentIndex);
  

// Animation for page swtiching

  function showLoader() {
    const loader = document.getElementById('loading');
    if (loader) loader.classList.remove('hidden');
  }
  function hideLoader() {
    const loader = document.getElementById('loading');
    if (loader) loader.classList.add('hidden');
  }
  function showLoadingAndNavigate(url) {
    showLoader();
    setTimeout(() => {
      window.location.href = url;
    }, 500);
  }

  
  window.addEventListener('pageshow', function (event) {
  
    if (performance.getEntriesByType('navigation')[0].type === 'back_forward') {
      showLoader();
      setTimeout(hideLoader, 600);
    }
  });
  window.addEventListener('load', hideLoader);



  