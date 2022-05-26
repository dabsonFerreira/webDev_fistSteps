function myMove() {
  const elem = document.getElementById("wm-logo");
  const elem2 = document.getElementById("wm-logo1");
  const elem3 = document.getElementById("wm-logo-sn");
  const elem4 = document.getElementById("wm-logo-sn1");

  let id = null;  
  let pos = 0;
  let pos2=0;
  let n =0, s=0;
  let abson = ['a','b','s','o','n'];
  let erreira = ['e','r','r','e','i','r','a'];



  clearInterval(id);
  id = setInterval(frame, 20);//35
  elem2.style.opacity = 0;
  function frame() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      if (pos<=100){
        pos++;
        elem.style.opacity = 0.01*pos;}    
      if (pos>=25){
        pos2++;
        elem2.style.opacity =  0.012*pos2;} 
      if (pos>=96&&pos<=100){
          elem3.innerHTML += abson[n];
          n++;
          /*console.log(n)}*/
      }
      if (pos>=94&&pos<=100){
          elem4.innerHTML += erreira[s];          
          s++;
          /*console.log(elem4)*/
          }
        
      }
  }
       
}