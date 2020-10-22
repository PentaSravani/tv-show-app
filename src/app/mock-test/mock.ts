import { convertToParamMap } from '@angular/router';

export const locationStub = { back: jasmine.createSpy('back') };
export const routeMock = {
    snapshot: {
        paramMap: convertToParamMap({ id: '1' })
    }
};
