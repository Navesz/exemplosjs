const swap = (arr, pos1, pos2) => {
  [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
};

const shuffle = (arr, numSwaps) => {
  for (let i = 0; i < numSwaps; i++) {
    const pos1 = Math.floor(Math.random() * arr.length);
    const pos2 = Math.floor(Math.random() * arr.length);
    swap(arr, pos1, pos2);
  }
};

const bubble_sort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

const selection_sort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    swap(arr, i, minIdx);
  }
};

const partition = (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
};

const quick_sort = (arr, low, high) => {
  if (low < high) {
    const pi = partition(arr, low, high);
    quick_sort(arr, low, pi - 1);
    quick_sort(arr, pi + 1, high);
  }
};
