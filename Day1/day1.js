function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(nums[i], i);
  }
}


function isPalindrome(s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return s === s.split("").reverse().join("");
}