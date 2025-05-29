import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core'
import { RointeService } from '../services/rointe.service';

export const authGuard: CanActivateFn = (route, state) => {
  const rointeService = inject(RointeService)
  const router = inject(Router)
  if (rointeService.user) {
    return true
  } else {
    router.navigate(['/login'])
    return false
  }
};
