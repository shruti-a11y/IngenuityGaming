// <!-- Scripting language v/s Programming language -->

// <!-- The first question which strikes into the mind is, what is the difference between programming and scripting language. The only difference which exists is that the scripting language does not require any compilation, it is directly interpreted. -->

// <!-- For example, the programs written in a language such as C++ are compiled before execution whereas the programs written in scripting languages such as Python or JavaScript are directly interpreted and are not compiled. -->


    var student = [
        {name: " Shruti"},
        {name: " Shreya"},
        {name: " Manika"},
    ];
    var students=[];
     function admitStudent(student,callback){
        setTimeout(() => {
           students.push(student) 
           console.log(
                "student has been admited"
            );
            callback();
        }, 3000);
     }

     function displayStudent() {
        setTimeout(() => {
            var str="";
            students.forEach((student) => {
                str+=student.name+ "";
            });
            console.log(str);
            console.log(
                "student has been fetch"
            );
        }, 1000);
     }

     var newStudent = {name:"Astha"};
     admitStudent(newStudent,displayStudent());

    //  displayStudent();


