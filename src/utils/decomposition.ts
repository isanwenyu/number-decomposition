export function generateDecompositions(n: number): number[][][] {
  const result: number[][][] = [];
  
  function decompose(target: number, current: number[][], sum: number = 0, start: number = 1): void {
    if (sum === target) {
      result.push([...current]);
      return;
    }
    
    if (sum > target) {
      return;
    }
    
    for (let i = start; i <= target - sum; i++) {
      current.push([i]);
      decompose(target, current, sum + i, i);
      current.pop();
    }
  }
  
  decompose(n, []);
  return result;
}