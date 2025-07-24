  const searchInput = document.getElementById('searchInput');
  const searchWrapper = document.getElementById('searchWrapper');
  const searchIcon = searchWrapper.querySelector('svg');

  searchInput.addEventListener('focus', () => {
    searchWrapper.classList.add('w-32', 'lg:w-64');
    searchInput.classList.remove('bg-[#f2f1eb]', 'border-gray-300');
    searchInput.classList.add('bg-white', 'border-blue-500');
    searchIcon.classList.remove('text-gray-400');
    searchIcon.classList.add('text-blue-500');
  });

  searchInput.addEventListener('blur', () => {
    searchWrapper.classList.remove('w-32', 'lg:w-64');
    searchWrapper.classList.add('w-20', 'sm:w-24', 'lg:w-48');
    searchInput.classList.remove('bg-white', 'border-blue-500');
    searchInput.classList.add('bg-[#f2f1eb]', 'border-gray-300');
    searchIcon.classList.remove('text-blue-500');
    searchIcon.classList.add('text-gray-400');
  });


 const searchInputSmall = document.getElementById('searchInputSmall');
  const searchWrapperSmall = document.getElementById('searchWrapperSmall');
  const searchIconSmall = searchWrapperSmall.querySelector('svg');

  searchInputSmall.addEventListener('focus', () => {
    searchWrapperSmall.classList.remove('w-20', 'sm:w-24', 'lg:w-32');
    searchWrapperSmall.classList.add('w-32', 'lg:w-48');
    searchInputSmall.classList.remove('bg-[#f2f1eb]', 'border-gray-300');
    searchInputSmall.classList.add('bg-white', 'border-blue-500');
    searchIconSmall.classList.remove('text-gray-400');
    searchIconSmall.classList.add('text-blue-500');
  });

  searchInputSmall.addEventListener('blur', () => {
    searchWrapperSmall.classList.remove('w-32', 'lg:w-48');
    searchWrapperSmall.classList.add('w-20', 'sm:w-24', 'lg:w-32');
    searchInputSmall.classList.remove('bg-white', 'border-blue-500');
    searchInputSmall.classList.add('bg-[#f2f1eb]', 'border-gray-300');
    searchIconSmall.classList.remove('text-blue-500');
    searchIconSmall.classList.add('text-gray-400');
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
  
