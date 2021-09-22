//.component extension is a convention for Ts
// in Ts , a component is created by creating a new class**
//We can only define how such a component would look like, and that includes a **name for it.

import { Component } from '@angular/core';

@Component({
  //selector allows us to use the component thro' calling
  selector: 'app-post-create',
  //template is defined as an object

  templateUrl: './post-create.component.html',
})
export class PostCreateComponent {
  onAddPost(){
    alert("Post has been added Successfully");
  }
}
