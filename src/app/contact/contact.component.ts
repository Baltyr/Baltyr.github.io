import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  onSubmit() {
    // Aquí irá el código para enviar el formulario
    if (this.name && this.email && this.subject && this.message ) {
      this.niceModal();
    } 
  }

  niceModal() {
    Swal.fire(
      'Formulario enviado!',
      'Se respondera la solicitud a la brevedad!',
      'success'
    );
  }
  badModal() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>',
    });
  }
}
