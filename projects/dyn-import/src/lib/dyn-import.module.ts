import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynImportComponent } from './dyn-import.component';



@NgModule({
  declarations: [
    DynImportComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module')
          .then(esm => esm.SearchModule)
      },
      {
        path: 'edit',
        loadChildren: () => import('dyn-import-layer2')
          .then(esm => esm.EditModule)
      }
     ])
  ],
  exports: [
    DynImportComponent
  ]
})
export class DynImportModule { }
