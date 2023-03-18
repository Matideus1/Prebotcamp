const video = document.getElementById("video")

video.onmouseover( ()=>{
    video.play()
})

video.onmouseleave( ()=>{
    video.stop()
})