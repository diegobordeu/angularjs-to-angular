import { numberService } from '../ng1-app/services/numberService';

export function numberServiceFactory(i: any) {
  return i.get('numberService');
}

export const numberServiceProvider = {
  provide: numberService,
  useFactory: numberServiceFactory,
  deps: ['$injector']
};