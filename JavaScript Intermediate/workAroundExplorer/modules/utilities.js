function formatNumber(number) {
    const formatted = [];
    number = number.toString()
    const dot = number.indexOf('.');
    if (dot === -1) {
        for (let i = number.length - 1; i >= 0; i--) {
          for (let j = 1; j < 4; j++) {
            formatted.push(number[i]);
            if (j !== 3) {
                i -= 1;
            }
          }
          if (i > 0) {
              formatted.push(',');
          }
          }
          formatted.reverse()
          formatted.push('.00')
    } else {
        for (let i = dot - 1; i >= 0; i--) {
        for (let j = 1; j < 4; j++) {
            formatted.push(number[i]);
            if (j !== 3) {
                i -= 1;
            }
        }
        if (i > 0) {
            formatted.push(',');
        }
        }
        formatted.reverse()
        formatted.push(number.slice(dot, number.length))
    }
    
    
    
    return formatted.join('');

  }

  console.log(formatNumber(1234567))

  
export { formatNumber };
