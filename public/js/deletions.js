const deletionmMarks=document.querySelectorAll('p>span.delete');
const delfile=document.querySelector('input[type="button"].delfile');

delfile.addEventListener('click',function(e){
  e.preventDefault();
  swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover the file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
          swal("Poof! Your file was successfully scheduled for deletion!", {
          icon: "success",
        });
        delfile.parentElement.submit();
      } else {
        swal("The file  is unaffected!");
      }
    });
});

for (const deletionmMark of deletionmMarks) {
deletionmMark.addEventListener('click',function(){
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover your comment!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            let targetComment = this.parentElement;
            let deletionForm = document.createElement('form');
            deletionForm.method = 'post';
            deletionForm.classList.add('hiddenform');
            targetComment.appendChild(deletionForm);
            let deletionTextarea = document.createElement('textarea');
            deletionTextarea.name='delarea';
            deletionTextarea.innerHTML = encodeURI(targetComment.querySelector('span[data-owner]').outerHTML);
            deletionForm.appendChild(deletionTextarea);
            swal("Poof! Your comment was successfully scheduled for deletion!", {
            icon: "success",
          });
            deletionForm.submit();
            deletionForm.remove();
        } else {
          swal("Your comment is safe!");
        }
      });
});
}


