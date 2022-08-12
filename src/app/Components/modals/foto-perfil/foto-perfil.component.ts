import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/login/auth.service';

@Component({
  selector: 'app-foto-perfil',
  templateUrl: './foto-perfil.component.html',
  styleUrls: ['./foto-perfil.component.css']
})
export class FotoPerfilComponent implements OnInit {

  public imageSrc: string = '';
  public teste: string | null = '';

  constructor(private loginService: AuthService) { }

  ngOnInit(): void {
    this.getImage()
  }

  // convertImg() {
  //   const img = this.getImage()
  //   if(img != null)
  //     this.imageSrc = img as string;
  // }


  // getImage() {
  //   this.setImage();
  //   const image = localStorage.getItem('photo');
  //   if(image != null)
  //     this.imageSrc = image;
  //   console.log(this.imageSrc);
  // }

  getImage() {
    const photo = localStorage.getItem('photo')
    if (photo != null) {
      this.imageSrc = photo;
      return;
    }
    const id = localStorage.getItem('id')
    if (id != null) {
      this.loginService.getPhoto(id).subscribe({
        next: (response) => {
          localStorage.setItem('photo', response.photo);
          this.imageSrc = response.photo;
        },
        error: (erro) => {
          console.log(erro.status);
          console.log("Usuario não possui foto");
        }
      });
    }
  }

}
