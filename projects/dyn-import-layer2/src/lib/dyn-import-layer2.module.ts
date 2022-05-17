import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynImportLayer2Component } from './dyn-import-layer2.component';



@NgModule({
  declarations: [
    DynImportLayer2Component
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'edit',
        loadChildren: () => import('./edit/edit.module')
          .then(esm => esm.EditModule)
      }
    ])
  ],
  exports: [
    DynImportLayer2Component
  ]
})
export class DynImportLayer2Module { }
