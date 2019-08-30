import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { SampleSvcService } from './sample-svc.service';

describe('SampleSvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[SampleSvcService]

  }));
//it("",inject([],(svc:ServiceToBeTested)=>{}))
//(it("",fakeAsync=>{}))
it('should be created', () => {
    const service: SampleSvcService = TestBed.get(SampleSvcService);
    expect(service).toBeTruthy();
  });
});
