import { nativeService } from '../ng1-app/services/nativeService';

export function nativeServiceFactory(i: any) {
  return i.get('nativeService');
}

export const nativeServiceProvider = {
  provide: nativeService,
  useFactory: nativeServiceFactory,
  deps: ['$injector']
};