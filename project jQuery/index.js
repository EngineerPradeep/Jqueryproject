// $("#btn").on("click", function () {
//   const emailValue = $("#emailField").val();
//   const nameValue = $("#nameField").val();

//   if (emailValue && nameValue!=="") {
//     const tr = "<tr><td>" + emailValue + "</td><td>" + nameValue + "</td></tr>";
//     $("tbody").append(tr);
//   } else {
//     console.log("Enter the value");
//   }
// });

//  $("#btn").on("click", function(){
//   const emailValue = $("#emailField").val();
//   const nameValue = $("#nameField").val();
//   if(emailValue && nameValue!==""   ) {
//     const tr = "<tr><td>" + emailValue + "</td><td>" + nameValue + "</td></tr>";
//     $("tbody").append(tr);
//     // $("td").empty(tr);
//     // $("tbody").prepend(tr);
//   }
//   // } else if(removeEventListener != ""){
//   //   console.log("delete")
//   // }
//   else{
//     console.log("Enter the value")
//   }  
//  });


//  $("#btn").on("click", function(){
//   const emailValue = $("#emailField").val();
//   const nameValue = $("#nameField").val();
//   const actionValue = $("#actionValue").val();

//   if(emailValue && nameValue!==""  ){
//     const tr = "<tr><td>" + emailValue + "</td><td>" + nameValue + "+ </td><td>"+<td>delete</td> + "</td></tr>" ;
//     $("tbody").append(td);
    
//   }
  
//   else{
//     console.log("Enter the value");
//   }
//  });

// var emailArray = [];
// var nameArray = [];
//  $("#btn").on("click", function () {
//   const emailValue = $("#emailField").val();
//   const nameValue = $("#nameField").val();

//   if (emailValue && nameValue!=="") {
//     const tr = "<tr><td>" + emailValue + "</td><td>" + nameValue +   "</td><td><button>deletes</button></td></tr>";
//     $("tbody").append(tr);
//   } else {
//     console.log("Enter the value");

//   }
//   nameArray.push(nameValue);
//   emailArray.push(emailValue);
// });

// $(".table").on('click','button', function(){
//   var deleteRow = $(this).closest('tr');
//   var value = deleteRow.find("td:eq(1)").text();
//   var delValue= emailArray.indexof(value);
//   emailArray.splice(delValue,1);
//   deleteRow.remove();
// });


// $(document).ready(function(){
//   var rowIndex = 0;
//   $('#addbtn').on('click', function(){
//     $('#tbody.append{'<tr id= R) ${++rowIndex}'>
//   })
// })

// <td class="">
// <button class="btn btn-danger delete" type="button">Delete</button>
// </td>
// $('#tbody').on('click','.delete',function(){
//   $(this).closest('tr').remove();
// })

// $("#btn").on('click',function(e){
//  e.preventDefault();
//  var name = $("input[name='name']").val();
//  var email= $("input [name='email']").val();
//  $(".data-table tbody").append("<tr data-name=" " + name+ " " data.email = " " +email+ ""><td>" + name + "</td><td>" + type='button'> delete </button </td></tr>);
//  $("input[name='']").val("");
// });


// $("form").submit(function(e){
//   e.preventDefault();
//   var name = $("input[name='name']").val();
//   var email= $("input[name='email']").val();
//   $(".data-table tbody").append("<tr data-name='" +name+'" data-email=" " +email+ ""> <td>" +name+ "</td><td>" + email + "</td><td><button class='btn btn-danger btn-lg btn-delete' ,type='button'>Delete</button></td></tr>");
//   $("input [name='']").val("");
// });
// $('body').on('click','.btn-delete' .function () {
//   $(this).parents('tr').remove();
// });
// $("form").submit(function(e) {
//   e.preventDefault();
//   var name=$("input[name='name']").val();
//   var email=$("input[name='email']").val();

//    $(".data-table tbody").append("<tr data-name='"+name+"' data-email='"+email+"'><td>"+name+"</td><td>"+email+"</td><td><button class='btn btn-danger btn-lg btn-delete mr-3' type='button'>Delete</button><button class='btn btn-primary btn-lg btn-Edit ' type='button'>Edit</button></td></tr>");

//    $("input[name='']").val("");
// });

// $('body').on('click','.btn-delete',function() {
//   $(this).parents('tr').remove();
// });

// $('body').on('click', '.btn-Edit', function(){
//   var name = $(this).parents('tr').attr('data-name');
//   var email = $(this).parents('tr').attr('data-email')
//   $(this).parents('tr').find('td:eq(0)').html("<input name='edit-text' value='"+name+"'>");
//   $(this).parents('tr').find('td:eq(1)').html("<input name='edit-email' value='"+email+"'>");
//   $(this).parents('tr').find('td:eq(2)').prepend("<button type='button' class='btn btn-primary btn-lg btn-update mr-3'>Update</button>");
//   $(this).hide();
// });

  // $('body').on('click','.btn-update', function(){
    $("form").submit(function(e) {
      e.preventDefault();
      var name=$("input[name='name']").val();
      var email=$("input[name='email']").val();

       $(".data-table tbody").append("<tr data-name='"+name+"' data-email='"+email+"'><td>"+name+"</td><td>"+email+"</td><td><button class='btn btn-danger btn-lg btn-delete mr-3' type='button'>Delete</button><button class='btn btn-info btn-lg btn-edit' type='button'>Edit</button></td></tr>");

       $("input[name='']").val("");
    });

    $('body').on('click','.btn-delete',function() {
      $(this).parents('tr').remove();
    });

    $('body').on('click','.btn-edit',function() {
      var name=$(this).parents('tr').attr('data-name');
      var email=$(this).parents('tr').attr('data-email');

      $(this).parents('tr').find('td:eq(0)').html("<input name='edit_text' value='"+name+"'>");
      $(this).parents('tr').find('td:eq(1)').html("<input name='edit_email' value='"+email+"'>");

      $(this).parents('tr').find('td:eq(2)').prepend("<button type='button' class='btn btn-info btn-lg btn-update mr-3'>Update</button>");
      $(this).hide()
    });
    $('body').on('click','.btn-update',function() {
      var name=$(this).parents('tr').find("input[name='edit_text']").val();
      var email=$(this).parents('tr').find("input[name='edit_email']").val();

      if(name && email!==""){
        
      $(this).parents('tr').find('td:eq(2)').prepend("<button type='button' class='btn btn-info btn-lg btn-update mr-3'>Update</button>");
      $('body').append('tr');
      
      $(this).parents('tr').find('td:eq(0)').text(name);
      $(this).parents('tr').find('td:eq(1)').text(email);

      $(this).parents('tr').attr('data-name',name);
      $(this).parents('tr').attr('data-email',email);

      $(this).parents('tr').find('.btn-edit').show();
      $(this).parents('tr').find('.btn-update').remove();
       
      }else{
        console.log("Enter the Value")
      }


  

    // var name= $(this).parents('tr').find("input[name='name']").val();
    // var email= $(this).parents('tr').find("input[name='email']").val();
    // $(this).parents('tr').find('td:eq(0)').text(name);
    // $(this).parents('tr').find('td:eq(1)').text(email);
    // $(this).parents('tr').attr('data-name',name);
    // $(this).parents('tr').attr('data-email',email);

    // $(this).parents('tr').find('.btn-edit').show();
    // $(this).parents('tr').find('.btn-update').remove();

  });





