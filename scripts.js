


document.addEventListener('DOMContentLoaded', ()=>{
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry)=>{
            if(entry.isIntersecting) {
                if (entry.target.classList.contains('transform-item')) {
                    entry.target.classList.add('show-transform');

                }
                else {
                    entry.target.classList.add('show');
                }
            }
            else {
                if (entry.target.classList.contains('transform-item')) {
                    entry.target.classList.remove('show-transform');

                }
                else {
                    entry.target.classList.remove('show');
                }
            }

        });


    });


    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element)=> observer.observe(element));

    const transformElements = document.querySelectorAll('.transform-item');
    transformElements.forEach((element)=> observer.observe(element));


})