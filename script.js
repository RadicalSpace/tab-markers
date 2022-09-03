document.getElementById("button").addEventListener("click",edit)

function edit(){
  document.title = String(document.getElementById("inputBox").value)
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
      edit()
    }
});