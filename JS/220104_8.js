//1791. Find Center of Star Graph

/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
    const [[a, b], [c, d]] = edges;
    return a === c || b === c ? c : d;
  };
  
  edges = [[1,2],[2,3],[4,2]];

  console.log(findCenter(edges));