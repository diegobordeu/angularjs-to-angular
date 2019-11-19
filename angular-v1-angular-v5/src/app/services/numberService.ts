import { numberService } from '../ng1-app/services/numberService';

export function numberServiceFactory(i: any) {
  return i.get();
}

export const numberServiceProvider = {
  provide: numberService,
  useFactory: numberServiceFactory,
  deps: ['$injector']
};