function formData() {
   
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let personal_back = "Personal Background: " + document.getElementById('personal_back').value;
    let academic_back = "Academic Background: " + document.getElementById('academic_back').value;
    let subject_background = "Background in this subject: " + document.getElementById('subject_background').value;
    let computer_platform = "Primary Computer Platform: " + document.getElementById('computer_platform').value;
    let course_list = "Courses I'm Taking, and Why: " + document.getElementById('course_list').value;
    let funny_item = "Funny/Interesting item about yourself: " + document.getElementById('funny_item').value;
    let also_share = "I'd also like to share: " + document.getElementById('also_share').value;
    document.getElementById("greeting").textContent = "Welcome to Sydney's Pen Guide, " + first_name + " " + last_name + "!";
   
   if(document.getElementById('ballpoint').checked) {
    document.getElementById("pen").innerHTML
        =  "You are Team " +document.getElementById("ballpoint").value + ".";
    
    }
  else if(document.getElementById('gel').checked) {
    document.getElementById("pen").innerHTML
    = "You are Team " + document.getElementById("gel").value + ".";
        
   }
   
   if(document.getElementById('yes').checked) {
    document.getElementById("like").innerHTML
        =  "Did you like this form? " + document.getElementById("yes").value;
    
  }
 else if(document.getElementById('no').checked) {
    document.getElementById("like").innerHTML
    = "Did you like this form? " + document.getElementById("no").value;
        
  }
    let introData = [personal_back, academic_back, subject_background, computer_platform, course_list, funny_item, also_share,pen,like];
    display(introData);
  }
  




  
  function display(introData) {
  
    for (let i = 0; i < introData.length; i++) {
        let element_1 = document.createElement('li');
        let text = document.createTextNode(introData[i]);
        element_1.appendChild(text);
        let pos_new = document.getElementsByTagName('ul')[0];
        pos_new.appendChild(element_1);
    }
  
  }
