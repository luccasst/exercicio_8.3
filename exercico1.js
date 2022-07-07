const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  
  function flatten() {
    const arrayJuntas = arrays.reduce( (acc, curr) => acc.concat(curr) );
    return arrayJuntas;
  }
  console.log (flatten);