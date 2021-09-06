const uploadButton = $("#upload-button");
const imageInput = $("#file-input");



imageInput.change(function(event){
    var image = document.getElementById('display-image');
	image.src = URL.createObjectURL(event.target.files[0]);
});

async function send(base64Image){
    const response = await fetch('https://bintez.herokuapp.com/ai/', {
      method: 'POST',
      body:  base64Image,
    });
    const result = await response.json(); 
    alert(result["result"]);
}

uploadButton.click(function(){
    if(imageInput.prop('files').length > 0){
        const file = imageInput.prop('files')[0];
        let base64String = "";

        var reader = new FileReader();

        reader.onload = async function () {
            base64String = reader.result;
      
            imageBase64Stringsep = base64String;
      
            console.log(base64String);
            console.log("Loading");
            await send(base64String);
        }
        reader.readAsDataURL(file);
    }
});