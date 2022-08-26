import './bootstrap';

import '../sass/app.scss'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import Swal from "sweetalert2";
import ScrollReveal from 'scrollreveal'
import * as bootstrap from 'bootstrap'


let modelControl = document.getElementById('modelControl');
modelControl.addEventListener('click',function (){
    let exampleModal = new bootstrap.Modal(document.getElementById('exampleModal'),{
        backdrop : 'static'
    })
    exampleModal.show();
})
let Control = document.getElementById('Control')
Control.addEventListener('click',function (){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: 'var(--bs-primary)',
        cancelButtonColor: 'var(--bs-warning)',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
            })
        }
        else {

        }
    })
})
var slideUp = {
    distance: '30px',
    origin: top,
    duration : 500,
    interval : 200
};
ScrollReveal().reveal('.list-group-item',slideUp)