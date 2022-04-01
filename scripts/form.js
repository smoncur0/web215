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
    let select_value = document.querySelector( 'input[name="pen"]:checked');
    let checked_box = document.querySelectorAll('input[name="like"]:checked');
    let choice = [];
    
    //process value for radio buttons 
    if(select_value != null) {
      var pen = ("You are Team: " + select_value.value);
      }


    //process choice for checkboxes  
    checked_box.forEach((checkbox) => {
      choice.push(checkbox.value)
       });

    var answer = ("Paper Preferences: " + choice);



    document.getElementById("greeting").textContent = "Welcome to Sydney's Pen Guide, " + first_name + " " + last_name + "!";
  
    let introData = [personal_back, academic_back, subject_background, computer_platform, course_list, funny_item, also_share, pen, answer];

     
 
    display(introData);
  }
  

  
  
  function display(introData) {
    refresh = document.querySelectorAll('li');
    refresh.forEach((li) => li.remove())
    for (let i = 0; i < introData.length; i++) {
        let element_1 = document.createElement('li');
        let text = document.createTextNode(introData[i]);
        element_1.appendChild(text);
        let pos_new = document.getElementsByTagName('ul')[0];
        pos_new.appendChild(element_1);

    }

  }
