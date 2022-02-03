/ Returns true if and only if A can be sorted with at most one swap.
function almostSorted(A) {
  for (var i = 1; i < A.length; ++i) {
    // Look for an inverted adjacent pair.
    if (A[i-1] <= A[i]) {
      continue;
    }
    var x = A[i-1],
        left = i-1;
    // If x is one of a sequence of identical elements, take the leftmost.
    while (left-1 >= 0 && A[left-1] == x) {
      --left;
    }
    // Scan past the inverted pair for the earliest element no smaller than x.
    for (++i; i < A.length; ++i) {
      if (A[i] >= x) {
        break;  // If we never break here, i will be equal to A.length.
      }
    }
    // Let y be the element before the earliest element no smaller than x.
    var right = i-1,
        y = A[right];  
    // Swap x and y.
    A[left] = y;
    A[right] = x;
    // Is the array sorted now?
    for (i = (left == 0 ? 1 : left); i < A.length; ++i) {
      if (A[i-1] > A[i]) {
        return false;
      }
    }
    return true;  // One swap was enough to sort the array.
  }
  return true;  // The array is already sorted.
}

// A few tests.
function test(A) {
  document.write('['+A.join(', ')+']');
  var result = almostSorted(A);
  document.write(': <span class="', result, '">', result, '</span>');
  if (result) {
    document.write(' &rarr; ', '['+A.join(', ')+']');
  }
  document.write('<br />');
}
test([1, 2, 5, 4, 3]);
test([1, 2, 3, 5, 4]);
test([1, 4, 3, 2, 5]);
test([1, 5, 4, 3, 2]);
test([1, 5, 3, 3, 7]);
test([2, 2, 1, 3, 7]);
test([2, 3, 1, 3, 7]);
test([1, 3, 1, 3, 7]);
test([2, 1, 1, 3, 7]);