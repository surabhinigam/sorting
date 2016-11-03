describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });


  it('handles array with two elements', function(){
  	expect(bubbleSort([5, 3])).toEqual([3, 5]);
  });

  it('handles array with more than two elements', function(){
  	expect(bubbleSort([5, 3, 2, 4, 1, 0])).toEqual([0, 1, 2, 3, 4, 5]);
  });

   it('handles array with more than two elements', function(){
  	expect(bubbleSort([5, 13, 2, 4, 11, 0])).toEqual([0, 2, 4, 5, 11, 13]);
  });

   it('handles array with already sorted array', function(){
  	expect(bubbleSort([0, 2, 4, 5, 11, 13])).toEqual([0, 2, 4, 5, 11, 13]);
  });
});