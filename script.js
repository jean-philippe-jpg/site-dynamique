
function Users(){

    const xhr = new XMLHttpRequest();
    xhr.open("GET","index.json", true);
    
    xhr.addEventListener('readystatechange', function(){
        
        if(xhr.readyState === 4 ) {
        
            if(xhr.status === 200) {
    
         console.log('response'+ xhr.response);
         const object = JSON.parse(xhr.response);

         let myHtml=""
        object.pieces.forEach(element => {
            //console.log(element.name)
            myHtml += '<div style="margin-left: 100px; margin-top: 30px;"><p>'+element.name+'</p></div'
        });

        
         document.getElementById('information').innerHTML = myHtml;

        }
         else if( xhr.status === 404) {
            alert('url introuvable');
        } 
        else {
             alert('une erreur est survenue')

          }
        }
    });
    xhr.send();

}