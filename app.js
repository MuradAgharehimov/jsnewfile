window.addEventListener("load", function () {

    // 1. a və b ədədimiz var. Əgər a b-dən böyükdürsə, consolda "a b-den boyukdur" yazılsın, bərabərdirsə "beraber", digər halda isə "a b den kicikdir";

    var a = prompt('a-ni daxil edin')
    var b = prompt('b-ni daxil edin')

    if(a > b){
        console.log("a b-den boyukdur");
    }else if(a == b){
        console.log("beraber")
    }else{
        console.log("a b-den kicikdir");
    }



    // let students = [

    //     { id: 1, name: "Ali", surname: "Alisoy", age: 20, grade: 95 },

    //     { id: 2, name: "Vusala", surname: "Nabiyeva", age: 34, grade: 77 },

    //     { id: 3, name: "Aliya", surname: "Gurbanzade", age: 14, grade: 98 },

    //     { id: 4, name: "Sabir", surname: "Nuruyev", age: 15, grade: 54 },

    //     { id: 5, name: "Mehman", surname: "Heydarov", age: 22, grade: 100 },

    //     { id: 6, name: "Sevana", surname: "Mammadli", age: 41, grade: 35 },

    //     { id: 7, name: "Ilham", surname: "Babayev", age: 24, grade: 95 },

    //     { id: 8, name: "Namiq", surname: "Gulahmedov", age: 20, grade: 95 },

    //     { id: 9, name: "Aygun", surname: "Kazimova", age: 24, grade: 100 }

    // ]

    //  2. students arrayində indeksi cüt olan tələbələri yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;

    // let newArray = []

    // for (let i = 0; i < students.length; i++) {
    //     if(i % 2 === 0){
    //         newArray.push(students[i]);
    //     }
    // }

    // console.log(newArray);



    // 3.  students arrayində id - i tək olan tələbələrin adlarını consolda yazdırın.

    // for (let i = 0; i < students.length; i++) {
    //     if(i % 2 === 0){
    //         console.log(students[i].name);
    //     }
    // }


    // 4. students arrayinda yaşı 20+ olan tələbələri yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;

    // let ageArray = [];

    // for (let i = 0; i < students.length; i++) {
    //     if(students[i].age > 20){
    //         ageArray.push(students[i])
    //     }
    // }

    // console.log(ageArray);


    // 5. students arrayinda id-i cüt və grade-i 90+ olan tələbələri  yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;

    // let gradeArray = [];

    // for (let i = 0; i < students.length; i++) {
    //     if(i % 2 === 1 && students[i].grade > 90)
    //     gradeArray.push(students[i])
    // }


    // console.log(gradeArray);

    // 6.  students arrayinda grade-i 100 və ya 95-ə bərabər olan tələbələrin adlarını yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;

    // let newGrade = [];

    // for (let i = 0; i < students.length; i++) {
    //     if(students[i].grade == 100 || students[i].grade == 95){
    //         newGrade.push(students[i])
    //     }
    // }

    // console.log(newGrade);






})






