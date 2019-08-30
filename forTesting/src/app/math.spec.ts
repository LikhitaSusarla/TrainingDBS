import { Math } from './math';

describe('Math', () => {
  it('should create an instance', () => {
    expect(new Math()).toBeTruthy();
  });

  describe('Verify Math ops',()=>{

    let n1=100;
    let n2=201;
    it("should add numbers",()=>{
      let res=new Math().add(n1,n2);
      expect(res).toEqual(301);
      expect(res).toBeGreaterThan(n1);
      expect(res).toBeDefined();
      expect(res).toBeTruthy();
        })
        it("should check if a number is even or odd",()=>{
          let res1=new Math().evenOdd(n1);
          let res2=new Math().evenOdd(n2);

          expect(res1).toEqual("Even");
          expect(res2).toEqual("ODD");

          expect(res1).toBeDefined();
          expect(res2).toBeTruthy();
            })
  })
});
