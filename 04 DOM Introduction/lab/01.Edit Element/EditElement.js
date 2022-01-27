function editElement(HTMLelemnt,strReplace,replacer) {
   while(HTMLelemnt.textContent.includes(strReplace)){
       HTMLelemnt.textContent = HTMLelemnt.textContent.replace(strReplace,replacer)
   }
}