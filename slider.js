const video = document.querySelector('.video-background')

const swiperText = new Swiper('.swiper', {
    speed: 1600,
    mousewheel: {},
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    }
});


swiperText.on('sliderChanhe', function () {
    WebGLSampler.to(video, 1.6, {
        currentTime: (video.duration / this.slides.length) * this.realIndex
    })
})