function add(){
    background_imgTag = newImage();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_mage;
    
    rover_imgTag = newImage();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;

}

function uploadrover(){
    CSSMatrixComponent.drawImage(rover_imgTage, rover_x, rover_y, rover_width, rover_height);
}