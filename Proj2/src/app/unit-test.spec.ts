import { UnitTest } from './unit-test';
import { fakeAsync } from '@angular/core/testing';

// describe('UnitTest', () => {
//   beforeEach(()=>{});
//   afterEach(()=>{});

//   beforeAll(()=>{});
//   afterAll(()=>{});

//   it("",()=>{
//     expect(true).toBe(true);
//   })

//   it("",fakeAsync(()=>{
// let db:Object;
// // expect(db.getData()).toEqual("Data received");
// }))
// xit("",fakeAsync(()=>{
//   let db:Object;
//   // expect(db.getData()).toEqual("Data received");
//   }))
//   it("pending");

// });

describe('UnitTest', () => {
 
  it("should be ",()=>{
    expect(new UnitTest()).toBeTruthy(true);
  })

});